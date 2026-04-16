# sokrates-kazi-mladez

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes bundled with Node.js)

## Getting started locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/michael-chamrath-maira/sokrates-kazi-mladez.git
   cd sokrates-kazi-mladez
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Copy the example env file and fill in the required values:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your local settings.

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal).

## Other useful commands

| Command | Description |
|---|---|
| `npm run build` | Build for production |
| `npm start` | Run the production build |
| `npm test` | Run tests |
| `npm run lint` | Lint the codebase |
