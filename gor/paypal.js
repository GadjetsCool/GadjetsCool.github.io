paypal.Buttons({
    style : {
        color: 'blue'
    },
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units:[{
              amount: {
                  value:'9.90'
              }
            }]
        })
    },
    onApprove: function(data, actions) {
        // This function captures the funds from the transaction.
        return actions.order.capture().then(function(details) {
            console.log(details)
            alert('Transaction completed by ' + details.payer.name.given_name);
          window.location.replace("success.html")
        });
    }
}).render('#paypal-payment-button');