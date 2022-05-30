//
//  AppUITests.swift
//  AppUITests
//
//  Created by Galvin on 2021/8/22.
//

import XCTest

class AppUITests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.

        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
        
        let app = XCUIApplication()
        app.launchArguments += ["-keepScreenOnKey", "YES"]
        
        setupSnapshot(app)
        
        app.launch()
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testExample() throws {
        // UI tests must launch the application that they test.
        let app = XCUIApplication()
//        app.launch()
        
        print("app.popovers.debugDescription", app.popovers.debugDescription)

        // Use recording to get started writing UI tests.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
        
        XCTAssert(app.wait(for: .runningForeground, timeout: 5))
        
        sleep(5)
        
        snapshot("00Welcome")

        // Dismiss "What's New" if needed
        var continueButton = app.buttons["Done"]
        if continueButton.exists {
            continueButton.tap()
        }
        
        continueButton = app.buttons["开始使用"]
        if continueButton.exists {
            continueButton.tap()
        }
//
//        let overlayDoesNotExistPredicate = NSPredicate(format: "UIDropShadowView.exists == FALSE")
//        self.expectation(for: overlayDoesNotExistPredicate, evaluatedWith: app, handler: nil)
//        self.waitForExpectations(timeout: 5, handler: nil)
        
        sleep(2)
        
        snapshot("01HomeScreen")
        
        let webViewsQuery = app.webViews.webViews.webViews
        webViewsQuery/*@START_MENU_TOKEN@*/.otherElements["banner"]/*[[".otherElements[\"By stage ‹ Drop Rates │ Penguin Statistics\"].otherElements[\"banner\"]",".otherElements[\"banner\"]"],[[[-1,1],[-1,0]]],[0]]@END_MENU_TOKEN@*/.children(matching: .button).element(boundBy: 0).tap()
        webViewsQuery/*@START_MENU_TOKEN@*/.staticTexts["Select By Stage"]/*[[".otherElements[\"By stage ‹ Drop Rates │ Penguin Statistics\"]",".otherElements[\"navigation\"].staticTexts[\"Select By Stage\"]",".staticTexts[\"Select By Stage\"]"],[[[-1,2],[-1,1],[-1,0,1]],[[-1,2],[-1,1]]],[0]]@END_MENU_TOKEN@*/.tap()
        webViewsQuery.staticTexts["按作战"].tap()
        webViewsQuery.staticTexts["作戦別"].tap()
        
        sleep(2)
        
        snapshot("02Stage")
        
        let webViewsQuery2 = app.webViews.webViews.webViews
        webViewsQuery2/*@START_MENU_TOKEN@*/.otherElements["banner"]/*[[".otherElements[\"By stage ‹ Drop Rates │ Penguin Statistics\"].otherElements[\"banner\"]",".otherElements[\"banner\"]"],[[[-1,1],[-1,0]]],[0]]@END_MENU_TOKEN@*/.children(matching: .button).element(boundBy: 0).tap()
        webViewsQuery2.staticTexts["Select By Item"].tap()
        webViewsQuery2.staticTexts["按素材"].tap()
        webViewsQuery2.staticTexts["素材別"].tap()
    }

//    func testLaunchPerformance() throws {
//        if #available(macOS 10.15, iOS 13.0, tvOS 13.0, watchOS 7.0, *) {
//            // This measures how long it takes to launch your application.
//            measure(metrics: [XCTApplicationLaunchMetric()]) {
//                XCUIApplication().launch()
//            }
//        }
//    }
}
