Playwright setup

- Install Node.js ( If already installed check the version using node -v)
- Install VS code editor
- Create project folder & open it in VS code editor
- or clone repository: git clone https://github.com/Rahul-Sikarwar/PlaywrightAssignment.git



- Install playwright via terminal
- npm init playwright@latest
- To check the version of playwright : npm playwright -v

- or Install playwright via extension (Playwright Test for VS code ) in VS code & then go to command pallete and search playwright. Click on "Install playwright".




- Run Playwright test:
- npx playwright test ( To run the tests in headless mode)
- npx playwright test --headed ( To run the tests in headed mode)
- npx playwright test --project=chromium --headed ( To run the test in headed mode in Chromium )



- HTML report:
- npx playwright show-report



- Allure report: Need to run below commands
- Installation of allure-playwright module: npm install -D allure-playwright
- Installing Allure command line: sudo npm install -g allure-commandline --save-dev
- Adding in config.js: reporter=['allure-playwright',{outputFolder: 'allure-results'}] or npx playwright test --reporter=allure-playwright
- Run the tests
- Generate allure reports: allure generate ./allure-results -o ./allure-report —clean
- To open the report: allure open allure-report
