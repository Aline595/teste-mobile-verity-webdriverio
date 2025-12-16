# Teste verity mobile em webdriver io

Projeto de teste Em WEBDriver IO

## 📝 Como executar

1. Clone do repositório:

2. Instale as dependências:
  ```bash
    npm install
  ```
## 📝 Dependências

- Node 
- npm ou yarn  
- Appium 2.17.1
- uiautomator2 2.1.5   


## 💻 Scripts disponíveis

```json
"scripts": {
  "wdio_android": "wdio run wdio.android.conf.js",
  "wdio_ios": "wdio run wdio.ios.conf.js",
  "wdio_android_BS": "wdio run wdio.android.bs.conf.js",
  "allure:generate": "allure generate allure-results --clean -o allure-report",
  "allure:open": "allure open allure-report"
}
```

## ▶️ Como executar os testes

- Android BrowserStack:
  ```bash
  npx run wdio_android_BS
  ```

## 📊 Relatórios Allure

Após a execução dos testes, para gerar e visualizar o relatório Allure

```bash
allure generate allure-results --clean -o allure-report && allure open
```

## 🔁 Pipeline CI/CD

Este projeto usa o GitHub Actions
