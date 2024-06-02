// "use client";

// import { useCallback, useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// // import { CardWrapper } from "@/components/auth/card-wrapper";
// import { newVerification } from "@/actions/new-verification";
// import BeatLoader from "react-spinners/BeatLoader";
// import { FormError } from "@/components/form-error";
// import { FormSuccess } from "@/components/form-success";
// import { useRouter } from "next/navigation";

// export const NewVerificationForm = () => {
//     const [error, setError] = useState<string | undefined>("");
//     const [success, setSuccess] = useState<string | undefined>("");
//     const searchParams = useSearchParams();
//     const router = useRouter();

//     const token = searchParams.get("token");

//     const onSubmit = useCallback(() => {
//         if (success || error) return;
//         if (!token) {
//             setError("Missing token!");
//             return;
//         }
//         newVerification(token)
//             .then((data) => {
//                 setError(data.error);
//                 setSuccess(data.success);
//                 if (data.success) {
//                     router.push("/auth/login");
//                 }
//             })
//             .catch(() => {
//                 setError("Something went wrong!");
//             });
//     }, [token, error, success]);

//     useEffect(() => {
//         onSubmit();
//     }, []);

//     return (
//         <CardWrapper
//             headerLabel="Confirming your verification"
//             backButtonLabel="Back to login"
//             backButtonHref="/auth/login"
//         >
//             <div className="flex items-center w-full justify-center">
//                 {!success && !error && <BeatLoader />}
//                 <FormSuccess message={success} />
//                 {!success && <FormError message={error} />}
//             </div>
//         </CardWrapper>
//     );
// };
