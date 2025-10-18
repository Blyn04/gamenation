import emailjs from '@emailjs/browser';

// EmailJS configuration - REPLACE THESE WITH YOUR ACTUAL VALUES
const EMAILJS_SERVICE_ID = 'service_mhrkt95';
const EMAILJS_TEMPLATE_ID = 'template_t800ihf';
const EMAILJS_PUBLIC_KEY = 'SgdD442AGZvlXBc0v';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Automatic email sending service - NO BACKEND REQUIRED
export const sendPurchaseConfirmationEmail = async (userEmail, userName, purchasedGames, totalAmount) => {
  try {
    // Create detailed email content
    const emailBody = `
🎮 GameNation Purchase Confirmation

Dear ${userName},

Thank you for your purchase! Your games have been successfully added to your library.

📋 Purchase Details:
- Purchase Date: ${new Date().toLocaleDateString()}
- Total Amount: ₱${totalAmount}
- User Email: ${userEmail}

🎯 Purchased Games:
${purchasedGames.map((game, index) => `${index + 1}. ${game.title} - ₱${game.price}`).join('\n')}

Your games are now available in your GameNation library. You can start playing immediately!

If you have any questions, please contact our support team.

---
This email was sent from GameNation. Please do not reply to this email.
    `.trim();

    console.log('🎮 Purchase Confirmation Details:');
    console.log('📧 Email TO: ' + userEmail);
    console.log('👤 User: ' + userName);
    console.log('💰 Total: $' + totalAmount);
    console.log('🎯 Games:', purchasedGames);
    console.log('📧 Email Content:', emailBody);

    // Try to send email automatically using EmailJS
    try {
      console.log('🚀 Attempting to send email via EmailJS...');
      console.log('Service ID:', EMAILJS_SERVICE_ID);
      console.log('Template ID:', EMAILJS_TEMPLATE_ID);
      console.log('Public Key:', EMAILJS_PUBLIC_KEY);
      
      const templateParams = {
        to_email: userEmail,
        to_name: userName,
        from_name: 'GameNation',
        from_email: 'nulsnumoa@gmail.com',
        subject: `🎮 GameNation Purchase Confirmation - ${userName}`,
        message: emailBody,
        purchase_date: new Date().toLocaleDateString(),
        total_amount: totalAmount,
        games_list: purchasedGames.map((game, index) => `${index + 1}. ${game.title} - ₱${game.price}`).join('\n')
      };

      console.log('📧 Template params:', templateParams);

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('✅ Email sent automatically:', result);
      
      return { 
        success: true, 
        message: `Purchase completed! Confirmation email has been AUTOMATICALLY sent to ${userEmail}.`,
        emailContent: emailBody
      };
    } catch (emailError) {
      console.error('❌ EmailJS failed:', emailError);
      console.error('❌ Error details:', emailError.message);
      console.error('❌ Error code:', emailError.status);
      
      // Don't fallback to mailto - just show error
      return { 
        success: false, 
        message: `EmailJS failed: ${emailError.message}. Please check your EmailJS configuration.`,
        emailContent: emailBody
      };
    }
    
  } catch (error) {
    console.error('Failed to process purchase confirmation:', error);
    return { success: false, message: 'Failed to process purchase confirmation' };
  }
};

// Helper function to format the games list for the email
const formatGamesList = (games) => {
  if (!games || games.length === 0) {
    return 'No games purchased';
  }

  return games.map((game, index) => 
    `${index + 1}. ${game.title} - $${game.price}`
  ).join('\n');
};

// Automatic email sending service - NO BACKEND REQUIRED
export const sendPurchaseConfirmationEmailSimple = async (userEmail, userName, purchasedGames, totalAmount) => {
  try {
    // Create detailed email content
    const emailBody = `
🎮 GameNation Purchase Confirmation

Dear ${userName},

Thank you for your purchase! Your games have been successfully added to your library.

📋 Purchase Details:
- Purchase Date: ${new Date().toLocaleDateString()}
- Total Amount: ₱${totalAmount}
- User Email: ${userEmail}

🎯 Purchased Games:
${purchasedGames.map((game, index) => `${index + 1}. ${game.title} - ₱${game.price}`).join('\n')}

Your games are now available in your GameNation library. You can start playing immediately!

If you have any questions, please contact our support team.

---
This email was sent from GameNation. Please do not reply to this email.
    `.trim();

    console.log('🎮 Purchase Confirmation Details:');
    console.log('📧 Email TO: ' + userEmail);
    console.log('👤 User: ' + userName);
    console.log('💰 Total: $' + totalAmount);
    console.log('🎯 Games:', purchasedGames);
    console.log('📧 Email Content:', emailBody);

    // Try to send email automatically using EmailJS
    try {
      console.log('🚀 Attempting to send email via EmailJS...');
      console.log('Service ID:', EMAILJS_SERVICE_ID);
      console.log('Template ID:', EMAILJS_TEMPLATE_ID);
      console.log('Public Key:', EMAILJS_PUBLIC_KEY);
      
      const templateParams = {
        to_email: userEmail,
        to_name: userName,
        from_name: 'GameNation',
        from_email: 'nulsnumoa@gmail.com',
        subject: `🎮 GameNation Purchase Confirmation - ${userName}`,
        message: emailBody,
        purchase_date: new Date().toLocaleDateString(),
        total_amount: totalAmount,
        games_list: purchasedGames.map((game, index) => `${index + 1}. ${game.title} - ₱${game.price}`).join('\n')
      };

      console.log('📧 Template params:', templateParams);

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('✅ Email sent automatically:', result);
      
      return { 
        success: true, 
        message: `Purchase completed! Confirmation email has been AUTOMATICALLY sent to ${userEmail}.`,
        emailContent: emailBody
      };
    } catch (emailError) {
      console.error('❌ EmailJS failed:', emailError);
      console.error('❌ Error details:', emailError.message);
      console.error('❌ Error code:', emailError.status);
      
      // Don't fallback to mailto - just show error
      return { 
        success: false, 
        message: `EmailJS failed: ${emailError.message}. Please check your EmailJS configuration.`,
        emailContent: emailBody
      };
    }
    
  } catch (error) {
    console.error('Failed to process purchase confirmation:', error);
    return { success: false, message: 'Failed to process purchase confirmation' };
  }
};

// Create email content
const createEmailContent = (userName, purchasedGames, totalAmount) => {
  const gamesList = purchasedGames.map((game, index) => 
    `${index + 1}. ${game.title} - $${game.price}`
  ).join('\n');

  return {
    to: 'nulsnumoa@gmail.com', // Your specified email
    subject: `Purchase Confirmation - ${userName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">🎮 GameNation Purchase Confirmation</h2>
        
        <p>Dear ${userName},</p>
        
        <p>Thank you for your purchase! Your games have been successfully added to your library.</p>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">📋 Purchase Details</h3>
          <p><strong>Purchase Date:</strong> ${new Date().toLocaleDateString()}</p>
          <p><strong>Total Amount:</strong> ₱${totalAmount}</p>
        </div>
        
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Purchased Games</h3>
          <pre style="white-space: pre-line; font-family: Arial, sans-serif;">${gamesList}</pre>
        </div>
        
        <p>Your games are now available in your GameNation library. You can start playing immediately!</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://gamenation.com/library" 
             style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            View My Library
          </a>
        </div>
        
        <p style="color: #64748b; font-size: 14px;">
          If you have any questions, please contact our support team.
        </p>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
        
        <p style="color: #64748b; font-size: 12px; text-align: center;">
          This email was sent from GameNation. Please do not reply to this email.
        </p>
      </div>
    `,
    text: `
      GameNation Purchase Confirmation
      
      Dear ${userName},
      
      Thank you for your purchase! Your games have been successfully added to your library.
      
      Purchase Details:
      - Purchase Date: ${new Date().toLocaleDateString()}
      - Total Amount: ₱${totalAmount}
      
      Purchased Games:
      ${gamesList}
      
      Your games are now available in your GameNation library. You can start playing immediately!
      
      View your library: https://gamenation.com/library
      
      If you have any questions, please contact our support team.
      
      ---
      This email was sent from GameNation. Please do not reply to this email.
    `
  };
};
