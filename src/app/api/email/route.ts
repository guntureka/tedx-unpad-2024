import { NextResponse } from "next/server";
import { db } from "@/utils/db";
import { transporter } from "@/utils/mail";

const GET = async () => {
    
    // get the email from the database, only the 'email' field
    const emailList = await db.user.findMany({
        select: {
            email: true,
        },
    });

    // remove duplicates
    const uniqueEmailList = emailList.filter((email, index, self) =>
        index === self.findIndex((t) => t.email === email.email)
    );

    // see the email in the console
    console.log(uniqueEmailList);

    for (const { email } of uniqueEmailList) {
        if (email) {
            // send the email
            const mailOptions = {
                from: "TEDxPadjadjaran University <admin@tedxpadjadjaranuniversity.com>",
                to: email,
                subject: "Time Running Out for Your Golden Ticket! ⏳",
                html: `<img src="https://i.ibb.co/RD4YTT4/logo-white.png" alt="Logo TEDx"><br />
                        <p style="font-family: Arial;">
                        Hey there, Wisdom Wonderers!<br><br>
                        Remember that mind-blowing riddle you found that holds the key to unlocking your golden ticket? It's still locked!<br><br>
                        <strong>8 golden tickets remain hidden.</strong> Solve the riddle & submit your video mission by June 9th 2024 <strong>23:59 WIB</strong> to join them!<br><br>
                        Remember, the golden ticket is your golden opportunity to be part of the incredible TEDxPadjadjaran University experience. Don't let it slip away!<br><br>
                        Good luck!
                        </p>`,
            };
            try {
                await transporter.sendMail(mailOptions);
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    return NextResponse.json({
        code: 200,
        status: "Berhasil mengirim email!",
    })
}

export { GET };
