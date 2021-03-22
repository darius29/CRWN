import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IXolyHwTC1vAmdChLOZ0fUotygSbiZsQVYrT9VlL8AKjslejMHd2gERTWAiSb7lhhBSscP2zYlkWseQ0qzxAC3B003pxrwNzr';

    const onToken = token => {
        alert('Payment Successful');
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;