# To do app

To do app is a simple to-do list application that allows users to manage tasks by logging in with their email and password or using their Google account.

## Technologies Used

- **Front-end**: Next.js, React
- **Back-end**: Node.js, Express
- **Database**: PostgreSQL
- **Authentication**: Firebase
- **Deployment**: Docker-compose

## Installation

Before running the application, ensure you have Docker installed on your computer.

1. **Clone the repository:**

   ```bash
   git clone git@github.com:carvalhaus/todoapp.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd todoapp
   ```

   Change into the directory where you cloned the repository.

3. **Ensure all necessary environment variables are set up to execute the project**

   ### Environment Variables

   #### Frontend Environment Variables

   Create a file named `.env.local` in the `client` folder and define the following variables:

   - `NEXT_PUBLIC_FIREBASE_API_KEY`: Your Firebase API key.
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`: Your Firebase authentication domain.
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`: Your Firebase project ID.
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`: Your Firebase storage bucket.
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID.
   - `NEXT_PUBLIC_FIREBASE_APP_ID`: Your Firebase app ID.

   #### Backend Environment Variables

   Create a file named `.env` in the `server` folder and configure these variables:

   - `DATABASE_URL`: URL to connect to your PostgreSQL database.
   - Download your Firebase service account private key file. Follow these steps:

   1. In the Firebase Console, navigate to **Settings > Service Accounts**.
   2. Click on **Generate new private key**, then **Generate key** to confirm.
   3. Securely store the downloaded JSON file containing the private key.
   4. Encode the Firebase JSON file to base64 and store it in `FIREBASE_CONFIG_BASE64` in your `.env` file:

   ##### Encode Firebase JSON File to Base64

   - **Linux:**

   ```bash
   base64 server/firebase-admin.json > server/encoded.json
   ```

   - **Windows (PowerShell):**

   ```powershell
   [Convert]::ToBase64String([System.IO.File]::ReadAllBytes(".\server\firebase-admin.json")) | Out-File -Encoding ASCII .\server\encoded.json
   ```

   This command encodes the contents of `server/firebase-admin.json` into base64 format and saves it in `server/encoded.json`.

   #### Docker Environment Variables

   Create a file named `.env` in the `todoapp` folder (where your Docker-compose file resides) and set these variables:

   - `POSTGRES_DB`: Name of your PostgreSQL database.
   - `POSTGRES_USER`: PostgreSQL username.
   - `POSTGRES_PASSWORD`: PostgreSQL password.
   - `DATABASE_URL`: URL to connect to your PostgreSQL database.

   Ensure these environment variables are correctly configured before building and running the application.

4. **Run the following commands:**

   ```bash
   docker-compose build
   docker-compose up -d
   ```

This will build and start containers for the backend, frontend, and database.

## Usage

Once the containers are up and running, you can access the application at `http://localhost:3000` in your browser.

If you want to consult the API documentation, access `http://localhost:3001/api/api-docs`.

## Features

- User authentication with email/password or Google account
- Create, update, and delete tasks
- Mark tasks as completed
- Responsive user interface

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request with your changes.

## Contact

For questions or support, please contact [me](mailto:ooliveira.joaop@gmail.com).
