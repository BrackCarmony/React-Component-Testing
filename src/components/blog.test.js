// Import files for testing React Components
import React from 'react' // We need access to React for the JSX templates to work
import { configure } from 'enzyme'; // Enzyme has a configuration we need to setup to use with react
import Adapter from 'enzyme-adapter-react-16'; // This Adapter will tell Enzyme how to work with Reactv16
import { shallow, mount, render } from 'enzyme'; // These are methods we can use from enzyme to test different things about a component
configure({ adapter: new Adapter() }); // Use the adapter to configure Enzyme

import renderer from 'react-test-renderer'; // If we want to use snapshots to test entire renders of components we can bring in react-test-renderer
