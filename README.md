# EFFECT OR SIDE-EFFECT IN REACT

## REACT'S MAIN JOB

* React library has a main to job to render UI and react to user input.
* Evaluate and Render JSX, Manage state and props, React to (User) input and events, Revaluate Component upon State and Prop change.
* This all work is done by react by using tools and features like `UseState()` hook, Props etc.
  
## SIDE-EFFECT

* Side effect can be anything else than above jobs, like storing data in browser storage or sending an https request to backend servers or setting and managing timers.
* If we send an http request in react functional component and if in response of our http request some state changes then react react will re-render that component and again send http request which will create an infite-loop.
* So we should not use any side-effect like a http request directly in a functional component which can create infinite-loop or bugs rather we should use `useEffect()` hook to handle side-effects in react.

![https://drive.google.com/uc?id=1LJuAdZaxbKQagtqfx2AobFmEWwXFYVTh](https://drive.google.com/uc?id=1LJuAdZaxbKQagtqfx2AobFmEWwXFYVTh)

![https://drive.google.com/uc?id=1LG8tWPVisn-bmQ6FhvWrGmSIMrs1jcuJ](https://drive.google.com/uc?id=1LG8tWPVisn-bmQ6FhvWrGmSIMrs1jcuJ)
