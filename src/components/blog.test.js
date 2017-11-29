// Import files for testing React Components
import React from 'react' // We need access to React for the JSX templates to work
import { configure } from 'enzyme'; // Enzyme has a configuration we need to setup to use with react
import Adapter from 'enzyme-adapter-react-16'; // This Adapter will tell Enzyme how to work with Reactv16
import { shallow, mount, render } from 'enzyme'; // These are methods we can use from enzyme to test different things about a component
configure({ adapter: new Adapter() }); // Use the adapter to configure Enzyme

import renderer from 'react-test-renderer'; // If we want to use snapshots to test entire renders of components we can bring in react-test-renderer


// Then we import the component we want to test
// Three types of things that we are going to talk about testing on a Component
import Blog from './blog';

describe('Blog', ()=>{

  // Testing a method from a component
  // Our components may have methods on them that we want to ensure is working correctly, regardless of anything that
  // is being rendered
  test('Test the test method on the Blog component', ()=>{
    // Arrange
    // If we want to test a Blog component's method then we need to create a Blog
    // We create the component with the new keyword
    let b = new Blog({
      title:'Test Title',
      blog:'This is a thing'
    });

    // Act
    // Here we want to test the uppercaseTitle function.  So we will run it.
    let result = b.uppercaseTitle();

    // Assert
    // Here we want to see if we get the uppercase version of our title.
    expect(result).toBe('TEST TITLE');
  })

  // Test that a render menthod has the same output as when we first setup the test
  // Sometimes we just want to say "Okay, this component is looking correct, let's
  // keep it looking like this.  We can change it later, but I don't want it to
  // happen by accident"
  test('Blog renders without warning', ()=>{
    // Arrange
    // Here I'm defining the props that would get passed down into the component
    let title = "test";
    let blog = "This is a lovely blog post";

    // Act
    // Here I test what happens whe I run the render function.
    // We are using the renderer function from react-test-render 
    let snapshot = renderer.create(<Blog title={title} blog={blog}/>).toJSON();

    // Assert
    expect(snapshot).toMatchSnapshot();
  })

  test('Blog renders with warning', ()=>{
    let title = "test";
    let blog = "This is a lovely blog post";
    let warning = "This is my warning";
    let snapshot = renderer.create(<Blog title={title} blog={blog} warning={warning}/>).toJSON();
    expect(snapshot).toMatchSnapshot();
  })

  test('Blog had warning if warnign prop set', ()=>{
    let title = "Test the Warning";
    let blog = "This is my blog about things";
    let warning = "This is a warning about the dangers of driving with your eyes closed.  Don't do it.";
    let tree = shallow(<Blog title={title} blog={blog} warning={warning}/>);

    expect(tree.find('.warning').length).toBe(1);


  })

})
