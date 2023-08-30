# Manthan-DEX

This is a backend implementation of a Decentralized Exchange platform. It provides functionalities for market makers to list their tokens, creates asks with values, and allows buyers to place bids on those tokens. The platform includes a trade matching engine that matches asks with bids based on price and quantity. Additionally, it stores purchase details, user information, asks, bids, and transactions in a database.

## Features

- User Management:
  - Create new users with unique usernames and email addresses.
  - Securely store user information and passwords (hashed) in the database.

- Market Maker:
  - Market makers can list their tokens on the platform.
  - Create asks (sell orders) for the listed tokens with desired prices and quantities.

- Buyers:
  - Buyers can place bids (buy orders) on the listed tokens with their desired prices and quantities.

- Trade Matching Engine:
  - Automatically matches asks with corresponding bids based on price and quantity.
  - Executes transactions when a bid price matches or exceeds an ask price.
  - Handles quantity adjustments for partially matched orders.
  
- Database:
  - Utilizes a relational database management system (RDBMS) to store users, tokens, asks, bids, and transactions.
  - Suitable database options include PostgreSQL or MySQL.
  - Provides efficient querying capabilities and handles high transaction volumes.

## Prerequisites

- Node.js (version 16.17.3)
- PostgreSQL or MySQL 
- Other dependencies (listed in `package.json`)

## Installation

1. Clone the repository:

git clone https://github.com/your-username/crypto-exchange-platform.git

2. Install dependencies:

cd crypto-exchange-platform
npm install

3. Configure the database connection:

- Open the `config.js` file.
- Update the database connection details (e.g., host, port, username, password).

4. Run the application:

npm start

5. The backend server will start running at `http://localhost:3000`.

## API Documentation

The API documentation provides details about the available endpoints, request/response formats, and authentication requirements. It's recommended to consult the API documentation for further integration and usage instructions.

## Contributing

Contributions to the crypto exchange platform project are welcome! If you have suggestions, bug reports, or feature requests, please submit an issue or a pull request. For major changes, please open a discussion first to discuss your ideas.

## License

The crypto exchange platform is open-source and distributed under the XYZ License. For more information, see the [LICENSE](LICENSE) file.

## Contact

For any inquiries or questions, please contact [https://timechainlabs.io](https://timechainlabs.io).
