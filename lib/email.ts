import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(email: string, name: string) {
  try {
    await resend.emails.send({
      from: 'AI Amazon <noreply@aiamazon.com>',
      to: email,
      subject: 'Welcome to AI Amazon!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Welcome to AI Amazon, ${name}!</h1>
          <p>Thank you for joining our ecommerce platform. We're excited to have you on board!</p>
          <p>You can now:</p>
          <ul>
            <li>Browse our extensive product catalog</li>
            <li>Add items to your wishlist</li>
            <li>Track your orders</li>
            <li>Leave reviews for products</li>
          </ul>
          <p>Happy shopping!</p>
          <p>The AI Amazon Team</p>
        </div>
      `,
    })
  } catch (error) {
    console.error('Failed to send welcome email:', error)
  }
}

export async function sendOrderConfirmationEmail(email: string, name: string, orderNumber: string) {
  try {
    await resend.emails.send({
      from: 'AI Amazon <noreply@aiamazon.com>',
      to: email,
      subject: `Order Confirmation - ${orderNumber}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Order Confirmation</h1>
          <p>Dear ${name},</p>
          <p>Thank you for your order! We've received your order #${orderNumber} and are processing it.</p>
          <p>You'll receive another email when your order ships.</p>
          <p>You can track your order status in your account dashboard.</p>
          <p>Thank you for choosing AI Amazon!</p>
          <p>The AI Amazon Team</p>
        </div>
      `,
    })
  } catch (error) {
    console.error('Failed to send order confirmation email:', error)
  }
}

export async function sendPasswordResetEmail(email: string, resetToken: string) {
  try {
    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password?token=${resetToken}`
    
    await resend.emails.send({
      from: 'AI Amazon <noreply@aiamazon.com>',
      to: email,
      subject: 'Password Reset Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Password Reset Request</h1>
          <p>You requested a password reset for your AI Amazon account.</p>
          <p>Click the link below to reset your password:</p>
          <a href="${resetUrl}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
          <p>This link will expire in 1 hour.</p>
          <p>If you didn't request this reset, please ignore this email.</p>
          <p>The AI Amazon Team</p>
        </div>
      `,
    })
  } catch (error) {
    console.error('Failed to send password reset email:', error)
  }
}
