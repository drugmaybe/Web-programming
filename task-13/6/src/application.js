import keyBy from 'lodash/keyBy.js';
import has from 'lodash/has.js';
import isEmpty from 'lodash/isEmpty.js';
import * as yup from 'yup';
import onChange from 'on-change';
import axios from 'axios';

const routes = {
  usersPath: () => '/users',
};

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().required('email must be a valid email').email(),
  password: yup.string().required().min(6),
  passwordConfirmation: yup.string()
    .required('password confirmation is a required field')
    .oneOf(
      [yup.ref('password'), null],
      'password confirmation does not match to password',
    ),
});

// Этот объект можно использовать для того, чтобы обрабатывать ошибки сети.
// Это необязательное задание, но крайне рекомендуем попрактиковаться.
const errorMessages = {
  network: {
    error: 'Network Problems. Try again.',
  },
};

// Используйте эту функцию для выполнения валидации.
// Выведите в консоль её результат, чтобы увидеть, как получить сообщения об ошибках.
const validate = (fields) => {
  try {
    schema.validateSync(fields, { abortEarly: false });
    return {};
  } catch (e) {
    return keyBy(e.inner, 'path');
  }
};

// BEGIN
export default () => {
    const form = document.querySelector('[data-form="sign-up"]');
    if (!form) return;

    const container = document.querySelector('[data-container="sign-up"]');
    const submitBtn = form.querySelector('[type="submit"]');

    const state = onChange({
        values: {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        },
        errors: {},
        isSubmitting: false
    }, (path) => {
        if (path.startsWith('values')) {
            state.errors = validate(state.values);
        }
        updateForm();
    });

    const updateForm = () => {
        Object.keys(state.values).forEach(name => {
            const input = form.querySelector(`[name="${name}"]`);
            if (input && input.value !== state.values[name]) {
                input.value = state.values[name];
            }
        });

        Object.entries(state.errors).forEach(([name, error]) => {
            const input = form.querySelector(`[name="${name}"]`);
            if (!input) return;

            if (error) {
                input.classList.add('is-invalid');
                let errorDiv = input.nextElementSibling;
                if (!errorDiv || !errorDiv.classList.contains('invalid-feedback')) {
                    errorDiv = document.createElement('div');
                    errorDiv.className = 'invalid-feedback';
                    input.after(errorDiv);
                }
                errorDiv.textContent = error.message;
            } else {
                input.classList.remove('is-invalid');
                const errorDiv = input.nextElementSibling;
                if (errorDiv?.classList.contains('invalid-feedback')) {
                    errorDiv.remove();
                }
            }
        });

        submitBtn.disabled = !isEmpty(state.errors) || state.isSubmitting;
    };

    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', (e) => {
            state.values[e.target.name] = e.target.value;
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!isEmpty(state.errors)) return;

        state.isSubmitting = true;
        try {
            const response = await axios.post(routes.usersPath(), state.values);
            if (response.status === 200) {
                container.innerHTML = 'User Created!';
            }
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
            state.isSubmitting = false;
        }
    });

    submitBtn.disabled = true;
};

// END
