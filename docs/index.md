#Project Title
Intellect Assignment 

#Overview
This project aims to create a ReactJS application featuring two widgets – a Circular Slider and a Scale Bar – with responsive design, testing, and documentation to provide users with interactive and visually appealing tools.

#Project Structure

Intellect Assignment/
  ├── src/
  │   ├── components/
  │   │   ├── CircularSliderWithBar.js
  │   │   ├── VolumeBar.js
  │   ├── pages/
  │   │   ├── Widgets.js
  │   ├── index.js
  │   ├── ...
  ├── __tests__/
  │   ├── CircularSliderWithBar.test.js
  │   ├── VolumeBar.test.js
  ├── ...
  ├── package.json
  ├── ...

#Technologies Used

Here is a list of technologies, libraries, and frameworks used in the project, along with their versions:

Dependencies:

@emotion/react - Version 11.11.1
@emotion/styled - Version 11.11.0
@mui/material - Version 5.14.7
react - Version 18.2.0
react-circular-progressbar - Version 2.1.0
react-dom - Version 18.2.0
react-type-animation - Version 3.1.0


DevDependencies:

@babel/preset-env - Version 7.22.14
@babel/preset-react - Version 7.22.5
@babel/preset-typescript - Version 7.22.11
@mui/types - Version 7.2.4
@testing-library/jest-dom - Version 6.1.2
@testing-library/react - Version 14.0.0
@types/jest - Version 29.5.4
@types/react - Version 18.2.15
@types/react-dom - Version 18.2.7
@typescript-eslint/eslint-plugin - Version 6.0.0
@typescript-eslint/parser - Version 6.0.0
@vitejs/plugin-react - Version 4.0.3
babel-jest - Version 29.6.4
eslint - Version 8.45.0
eslint-plugin-react-hooks - Version 4.6.0
eslint-plugin-react-refresh - Version 0.4.3
jest - Version 29.6.4
jest-environment-jsdom - Version 29.6.4
react-test-renderer - Version 18.2.0
ts-jest - Version 29.1.1
ts-node - Version 10.9.1
typescript - Version 5.0.2
vite - Version 4.4.5
These technologies, libraries, and frameworks are used to develop, test, and build the ReactJS application and its components.


#Components

The main components of the project and their purposes are as follows

1.Circular Slider with Bar
This component displays an animated circular progress bar that can be controlled by  dragging slider to change its value.

2.Volume Bar
The VolumeBar component is a React-based volume control bar that allows users to select volume levels, with each level visually represented by a bar. Users can click on bars to adjust the volume, and the selected volume level is highlighted.

#Pages

1.Widgets
The Widgets page is a React component that displays two widgets: "CircularSliderWithBar" and "VolumeBar." It includes a dynamic title animation, responsive grid layout, and user-friendly widget presentation. The page is suitable for showcasing and interacting with these widgets in a visually appealing manner.

#Test Cases

Explain the purpose of test cases and their importance in ensuring the correctness of your components. You can refer to the test cases you've already written using Jest and React Testing Library.

CircularSliderWithBar Component Tests
Test 1: Renders without crashing

Description: Checks if the component renders without errors.
Expected Outcome: The component should render without any issues.
Test 2: Displays initial value

Description: Verifies that the initial value is displayed correctly.
Expected Outcome: The component should display a value of '0' initially.
Test 3: Updates value on slider change

Description: Tests if the value updates correctly when the slider is changed.
Expected Outcome: The value should reflect the slider value multiplied by 10.
VolumeBar Component Tests
Test 1: Renders without crashing

Description: Checks if the component renders without errors.
Expected Outcome: The component should render without any issues.
Test 2: Displays default label

Description: Verifies that the default label is displayed correctly.
Expected Outcome: The component should display the 'Low' label initially.
Test 3: Updates label on bar click

Description: Tests if the label updates correctly when a bar is clicked.
Expected Outcome: The label should change according to the selected bar.
Running Tests
Provide instructions on how to run the tests for your project. Include any setup or configuration steps if necessary.


#Conclusion
The Intellect Assignment project offers a user-friendly web application featuring two interactive widgets – a Circular Slider and a Volume Control Bar.

Happy coding!

