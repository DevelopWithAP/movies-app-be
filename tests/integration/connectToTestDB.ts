import mongoose from 'mongoose';

export const connectToTestMongoDb = async (): Promise<void> => {
    const connectionOptions: any = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    if (process.env.MONGO_TEST_URL) {
       mongoose.connect(process.env.MONGO_TEST_URL, connectionOptions);
    } else {
        console.error('No Test DB url found');
    }
};

export const disconnectFromTestMongoDb = async (): Promise<void> => {
    mongoose.connection.close();
    console.log('Disconnecetd from Test DB.');
};