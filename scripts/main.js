const visiblePass = document.querySelector("#visiblePass");
const inVisiblePass = document.querySelector("#inVisiblePass");
const labelPass = document.querySelector("#labelPass");
const errors = document.querySelectorAll(".error");
const btn = document.querySelector("button");

const spanInput = document.querySelectorAll(".spanInput");
const password = document.querySelector("#password");
const email = document.querySelector("#user");
const inputs = [email, password];

// Appear option to Visibility
const appearOption = () => {
    visiblePass.style.display = "inline-block";
    inVisiblePass.style.display = "none";
}

const disappearOption = () => {
    visiblePass.style.display = "none";
    inVisiblePass.style.display = "none";
}
password.addEventListener("focus", appearOption);
// labelPass.addEventListener("focusout", disappearOption);

// Input Password Visible/Invisible
const changeVisibility = () => {
    if (password.type === "password") {
        password.type = "text";
        inVisiblePass.style.display = "inline-block";
        visiblePass.style.display = "none";
    }
    else {
        password.type = "password";
        inVisiblePass.style.display = "none";
        visiblePass.style.display = "inline-block";
    } 
}
password.addEventListener("click", changeVisibility);

// Verify of Inputs Values
const emailVerify = () => {
    const emailValue = document.querySelector("#user").value;
    const emailError = errors[0];

    if (emailValue.length < 5 || emailValue.length  > 50) {
        email.classList.add("requiredInput");
        emailError.style.display = "block";
    } else if (emailValue.length > 5 || emailValue.length  <= 50 ) {
        email.classList.remove("requiredInput");
        emailError.style.display = "none";
    }
};

const passVerify = () => {
    const passwordValue = document.getElementById("password").value;
    const passError = errors[1];
    
    if (passwordValue.length < 4 || passwordValue.length  > 60) {
        password.classList.add("requiredInput");
        passError.style.display = "block";
    } else if (passwordValue.length > 5 || passwordValue.length  <= 60 ) {
        password.classList.remove("requiredInput");
        passError.style.display = "none";
    }
};

email.addEventListener("input", emailVerify);
password.addEventListener("input", passVerify);
password.addEventListener("copy", () => false);

// Subida dos Span dentro do Input
const handleFocus = ({ target }) => {
    const span = target.parentNode.children[0];
    span.classList.add("inputSelect");
};

const handleFocusOut = ({ target }) => {
    if (target.value === "") {
        const span = target.parentNode.children[0];
        span.classList.remove("inputSelect");
    }
};

inputs.forEach(i => i.addEventListener("focus", handleFocus));
inputs.forEach(i => i.addEventListener("focusout", handleFocusOut));

// CHANGE LANG
const elements = {
    'title': {
        'pt-BR': 'Entrar',
        'en': 'Sign In'
    },
    'spanPlaceholderUser': {
        'pt-BR': 'Email ou número de telefone',
        'en': 'Email or phone number'
    },
    'userError': {
        'pt-BR': 'Informe um email ou número de telefone válido.',
        'en': 'Please enter a valid email or phone number.'
    },
    'spanPlaceholderPass': {
        'pt-BR': 'Senha',
        'en': 'Password'
    },
    'visiblePass': {
        'pt-BR': 'Mostrar',
        'en': 'Show'
    },
    'inVisiblePass': {
        'pt-BR': 'Ocultar',
        'en': 'Hide'
    },
    'passError': {
        'pt-BR': 'A senha deve ter entre 4 e 60 caracteres.',
        'en': 'Your password must contain between 4 and 60 characters.'
    },
    'btn': {
        'pt-BR': 'Entrar',
        'en': 'Sign In'
    },
    'remember-me': {
        'pt-BR': 'Lembre-se de mim',
        'en': 'Remember me'
    },
    'ajuda': {
        'pt-BR': 'Precisa de ajuda?',
        'en': 'Need help?'
    },
    'p-novoporaq': {
        'pt-BR': 'Novo por aqui? <a href="#Assine">Assine agora.</a>',
        'en': 'New to Netflix? <a href="#Assine">Sign up now.</a>'
    },
    'p': {
        'pt-BR': "Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.<a href='#SaibaMais'>Saiba Mais.</a>",
        'en': "This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href='#SaibaMais'>Learn more.</a>"
    },
    'pduvidas': {
        'pt-BR': "Dúvidas? Ligue <a href='#Ligue'>0800 581 2876</a>",
        'en': "Questions? Call <a href='#Ligue'>0800 591 3517</a>"
    },
    'faq': {
        'pt-BR': 'Perguntas frequentes',
        'en': 'FAQ'
    },
    'helpCenter': {
        'pt-BR': 'Central de Ajuda',
        'en': 'Help Center'
    },
    'terms': {
        'pt-BR': 'Termos de Uso',
        'en': 'Terms of Use'
    },
    'privacy': {
        'pt-BR': 'Privacidade',
        'en': 'Privacy'
    },
    'cookie': {
        'pt-BR': 'Preferências de cookies',
        'en': 'Cookie Preferences'
    },
    'corporate': {
        'pt-BR': 'Informações corporativas',
        'en': 'Corporate Information'
    },
    'port': {
        'pt-BR': 'Português',
        'en': 'Portuguese'
    },
    'en': {
        'pt-BR': 'Inglês',
        'en': 'English'
    }
};

const select = document.querySelector("#select");
const changeLanguage = (lang) => Object.keys(elements).forEach(key => document.querySelector(`#${key}`).innerHTML = elements[key][lang]);

select.addEventListener("change", ({ target }) => changeLanguage(target.value));
