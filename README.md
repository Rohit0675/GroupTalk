# GroupTalk
This is a real-time chat application built using [React](https://reactjs.org/) for the frontend, [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/) for the backend, and [Socket.IO](https://socket.io/) for enabling real-time communication.

The chat application allows users to connect with each other and exchange messages in real-time. It includes features such as public chat rooms and private messaging between users.

## Features

- Public Chat Rooms: Users can join different public chat rooms and communicate with other users in real-time.
- Private Messaging: Users can initiate private conversations with specific users and exchange messages privately.
- Real-Time Updates: The chat application provides real-time updates, ensuring that users receive new messages instantly without the need to refresh the page.
- User Authentication: Users can create accounts, log in, and authenticate themselves to participate in the chat application.
- User Status: Users' online/offline status is displayed, allowing others to know who is currently available for communication.
- Notifications: Users receive notifications for new messages in chat rooms or private conversations, helping them stay updated on new activity.

## Technologies Used

- Frontend: ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat-square)
- Backend: ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat-square), ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=flat-square)
- Real-Time Communication: ![Socket.IO](https://img.shields.io/badge/-Socket.IO-010101?logo=socket.io&logoColor=white&style=flat-square)
- Database: ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat-square) (with Mongoose ORM)
- State Management: ![Redux Toolkit](https://img.shields.io/badge/-Redux_Toolkit-764ABC?logo=redux&logoColor=white&style=flat-square)
- HTTP Requests: ![Axios](https://img.shields.io/badge/-Axios-007ACC?logo=axios&logoColor=white&style=flat-square)


## Getting Started

### Prerequisites

- Node.js and npm must be installed on your machine.

### Installation

1. Clone the repository: `git clone https://github.com/your-username/real-time-chat-app.git`
2. Navigate to the project directory: `cd real-time-chat-app`
3. Install dependencies for both the frontend and backend:
   - Frontend: `cd client && npm install`
   - Backend: `cd server && npm install`
4. Configure environment variables:
   - Create a `.env` file in the `server` directory.
   - Define the required environment variables in the `.env` file. Refer to the `.env.example` file for the required variables.
5. Start the development server:
   - Frontend: In the `client` directory, run `npm start`.
   - Backend: In the `server` directory, run `npm start`.
6. Open your web browser and access the application at `http://localhost:3000`.

## Usage

- Create a new account or log in to an existing account.
- Join public chat rooms or start private conversations with other users.
- Send and receive messages in real-time.
- Explore the various features of the chat application, such as user status, notifications, and room selection.

## Contributing

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push the branch to your forked repository: `git push origin feature-name`.
5. Submit a pull request detailing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or suggestions, please contact [Sujay Shahare](mailto:shaharesujay@gmail.com).

