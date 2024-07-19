import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.blue(
            "Por favor, escolha uma ferramenta: (1 - QR Code) ou (2 - Senha)"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 e 2"),
        required: true,
    },
];

export default mainPrompt;
