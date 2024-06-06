# Pyypl UI Assessment using Maestro framework

## About The Project
This repository contains test automation for mobile app using maestro.

### Details about the project
* `android`: directory includes all the locators, specs and test data
    * `locators`: sub-directory includes locators defined in and for each page example `landing_page.js` and element loading page defines in `load_elements.yml`.
    * `resuable_flows`: sub-directory includes assertions for each page, ex 
    * `specs`: sub-directory includes the test cases.
    * `test_data`: sub-directory that includes variable test data like debit card & user data.

## Getting Started
### Prerequisites
* Make sure you have Java, Android Studio. 
* To install maestro: Kindly refer to the installation steps at the maestro site https://maestro.mobile.dev/getting-started/installing-maestro

### Installation
Clone the repository
   ```sh
   git clone https://github.com/aggvipul1/pyypl_assessment_ui.git
   ```

### Execute Specs
Run below command mentioned in package.json to run the tests.
   ```shell
  npm run execute:ui

### Use case implemented
The spec automated verifies user is able to perform login, execute a debit card top up.

### Note
The test were implemented on windows11 and executed on MacOs due to issues with maestro in windows.