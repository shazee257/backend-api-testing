import { Request, Response } from "express";

const users = [
    { id: 1, email: "shazee257@gmail.com", password: 'abc12345', name: 'Shahzad' },
    { id: 2, email: "hanzala@gmail.com", password: 'xyz12345', name: 'Hanzala' },
];

export const login = (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' })
    }

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' })
    }

    res.status(200).json({
        data: user,
        message: 'Login successful'
    });
}

export const register = (req: Request, res: Response) => {
    res.status(200).json({ message: 'REGISTER API' });
}
