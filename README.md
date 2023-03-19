# Learning platform react app for Genesis Front-End School

This project is deployed by the link:
https://learning-platform-app.vercel.app/

The application contains two pages:

1) MainPage courses page, which displays 10 courses, basic information about them and added pagination;
2) CoursePage page with a view of a specific course, where a video player is displayed for viewing a lesson selected from the list of lessons;

The video player is implemented using the standard ReactPlayer. Added the ability to change the video playback speed using the "+" and "-" keys.
To notify the user about a locked lesson, a corresponding status is displayed and it is impossible to click on this lesson.
Added local saving of each lesson's viewing progress.
Added an adaptive design of the application, a components Spinner and Error for notifying the user about the status of certain requests.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

