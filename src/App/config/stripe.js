// src/App/config/stripe.js
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

export const stripe = new Stripe(process.env.PAYMENT_GATEWAY_KEY);
