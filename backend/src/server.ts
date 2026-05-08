import app from "./app";
import { connectDB } from "./config/db";
import { env } from "./config/env";

const startServer = async (): Promise<void> => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

void startServer();
