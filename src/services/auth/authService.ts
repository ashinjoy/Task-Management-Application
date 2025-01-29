import { signInWithGooglePopup } from "../../config/firebase/firebase";
import { IAuthGoogleData } from "../../interface/inferface";



export const googleSignInService = async (): Promise<IAuthGoogleData> => {
  try {
    const response = await signInWithGooglePopup();

    const data = {
      name: response.user?.displayName || null,
      email: response.user?.email || null,
      isVerified: response.user?.emailVerified,
      phoneNumber: response.user?.phoneNumber || null,
      profileImg: response.user?.photoURL || null,
      uid: response?.user?.uid,
    };
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
