Feature: verify Login functionality

    Feature Description

    Scenario: Verify login with valid credentials

        Given user launch the Application
        When User enter username as "Admin" and password as "admin123"
        And user click on login button
        Then user should be navigated to dashbaord page


    Scenario: Verify login with valid username and Invalid Password

        Given user launch the Application
        When User enter username as "Admin" and password as "ejhgfferu"
        And user click on login button
        Then user should see login error message

    Scenario: Verify login with invalid username and valid Password

        Given user launch the Application
        When User enter username as "erjfbgher" and password as "admin123"
        And user click on login button
        Then user should see login error message


    Scenario: Verify login with invalid username and invalid Password

        Given user launch the Application
        When User enter username as "erjfbgher" and password as "errguer"
        And user click on login button
        Then user should see login error message