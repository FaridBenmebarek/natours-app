import Axios from "axios";

import axios from "axios";
import { showAlert } from "./alerts";
const stripe = Stripe(
  "pk_test_51H8prCGG0BpcoVSODNXR8kUzCdmZedssFtDI3rZXSJA7ze6SeLErgpsfhITSBeRATh2lveOODvjkYcXdwehQAFBc00zsI2Pje5"
);

export const bookTour = async (tourId) => {
  try {
    // 1 Get session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2 Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert("error", err);
  }
};
