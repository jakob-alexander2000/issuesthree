import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String, 
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
});

const User = models.User || model("User", UserSchema);
export default User;

//in a normal, always running background server you would use something like tbis:
// const User = model("User", UserSchema);
// export default User;

// but in our app, route is only created and running for 
// the time when it's being called

//"models " object is provided by Mongoose library
//and stores all registered models
//If model name "user" already exists in models object,
//it assigns that existing model to the "user" variable.
//prevents redefining the model and ensures existing model is reused.
