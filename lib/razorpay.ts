import Razorpay from 'razorpay';
import CryptoJS from 'crypto-js';

export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID ?? '',
  key_secret: process.env.RAZORPAY_KEY_SECRET ?? ''
});

export function verifyRazorpaySignature(orderId: string, paymentId: string, signature: string) {
  const payload = `${orderId}|${paymentId}`;
  const expected = CryptoJS.HmacSHA256(payload, process.env.RAZORPAY_KEY_SECRET ?? '').toString();
  return expected === signature;
}
