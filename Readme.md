# RoomieConnect (FlatInflux)

**RoomieConnect** is a web application designed to simplify the process of finding a room and a roommate. This user-friendly platform allows users to post about vacancies, search for rooms, and connect with potential roommates seamlessly.

![image](https://github.com/user-attachments/assets/5c1043f8-fba8-46cb-ad64-f39a818c4c5e)


## Features

- **User Registration and Profile Management:** Users can register using their email and password, and edit their profile to post about vacancies.
- **Room and Roommate Search:** Users can post about vacant rooms, including their location, and search for available rooms based on their area.
- **Automatic Area Detection:** The platform automatically detects the user's area based on their PIN Code.
- **Interactive Map:** Utilizes the Leaflet map API to detect the user's area and connect with live locations or search based on PIN Code.
- **Authentication and Authorization:** Secured with JWT tokens for user authentication and authorization.

## Technologies Used

- **Frontend:**
  - **React.js:** For building the user interface with reusable components.
  - **Tailwind CSS:** For styling the application with a modern, responsive design.
  - **Leaflet Map API:** For interactive mapping and location-based searches.

- **Backend:**
  - **Node.js & Express.js:** For server-side logic and API management.
  - **MongoDB:** For database management and storing user data and room details.

- **Authentication:**
  - **JWT Tokens:** For secure user authentication and authorization.

- **Deployment:**
  - **Vercel:** For hosting the front-end and back-end of the application.

## Installation

To get started with RoomieConnect, follow these steps:

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/yourusername/roomieconnect.git
   cd roomieconnect
   ```

2. **Install Dependencies:**

   Make sure you have `npm` or `yarn` installed. Then, install the necessary dependencies:

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root of the project and add the required environment variables. Example:

   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the Development Server:**

   Start the development server:

   ```sh
   npm run dev
   ```

   or

   ```sh
   yarn dev
   ```

5. **Build for Production:**

   To build the application for production:

   ```sh
   npm run build
   ```

   or

   ```sh
   yarn build
   ```

6. **Start the Production Server:**

   ```sh
   npm start
   ```

   or

   ```sh
   yarn start
   ```

## Usage

- **Registration:** Users can register with their email and password.
- **Posting Vacancies:** Landlords can post vacant rooms with location details.
- **Searching for Rooms:** Users can search for available rooms based on their PIN Code or use the interactive map.

## Contributing

Feel free to contribute to this project by opening issues, submitting pull requests, or providing feedback. Please follow the [contributing guidelines](CONTRIBUTING.md) if you have any.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, you can reach out to me at [mneeraj2133@gmail.com](mailto:mneeraj2133@gmail.com).
