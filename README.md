
## Available Scripts


## To run manually:

In the project directory, you can run below commands:

1st run the npm install command in you project directory to install the required node modules.
### `npm install`

once module installation is finished run the npm start command in project directory to start the development server in localhost 3000
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\


## To run using docker:

1. Start the desktop docker.
2. Open terminal and move to the project dicrectory using cd command.
3. Run this below command,
    docker image build -t <image_name>:<tag> .
    value for <image_name> is incubyte
    value for <tag> is latest

    ### `docker image build -t incubyte:latest .`

4. Run the below command, it'll start the application in http://localhost:8000/
    ### `docker run -dp 8000:3000 --name incubyte-container incubyte:latest`

5. If the above command doesn't automatically open the application on localhost:8080, you can manually type the URL into your browser or click the link in the Docker Desktop app to open it.

