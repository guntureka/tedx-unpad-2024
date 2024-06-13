import { NextResponse } from "next/server";
import { db } from "@/utils/db";
import { transporter } from "@/utils/mail";

const GET = async () => {

    // get the email from the database, only the 'email' field
    // const emailList = await db.user.findMany({
    //     select: {
    //         email: true,
    //     },
    // });

    // remove duplicates
    // const uniqueEmailList = emailList.filter((email, index, self) =>
    //     index === self.findIndex((t) => t.email === email.email)
    // );

    // // see the email in the console
    // console.log(uniqueEmailList);

    // const uniqueEmailList = ['jihananggitaputri@gmail.com', 'bintangazahra4810@gmail.com', 'najmanwh@gmail.com', 'ghalia.aljannah@gmail.com', 'revokhayri@gmail.com', 'nazhifahajwa@gmail.com', 'naneunur15@gmail.com']
    // const uniqueNameList = ['Jihan Anggita Putri', 'Bintang Azzahra', 'Najma Nurwahidah', 'Dewi Ghalia Al-jannah', 'Revo Khayri', 'Nazhifah Ajwa', 'Naneu Kurniawan']

    const uniqueEmailList = ['aakiki091004@gmail.com', 'rizky21001@mail.unpad.ac.id']
    const uniqueNameList = ['AA Kiki', 'Rizky Ungpad']

    for (let i = 0; i < uniqueEmailList.length; i++) {
        // send the email
        const mailOptions = {
            from: "TEDxPadjadjaran University <admin@tedxpadjadjaranuniversity.com>",
            to: uniqueEmailList[i],
            subject: `Congratulations! Your Application to TEDxPadjadjaran University is Accepted! Dear ${uniqueNameList[i]},`,
            html:   `
                    <div style="font-family: Arial;">
                        <p>Dear ${uniqueNameList[i]},</p>

                        <p>We are thrilled to inform you that your application to attend TEDxPadjadjaran University has been accepted! We were incredibly impressed by your application and are excited to have you join us for an inspiring day of ideas worth spreading.</p>

                        <h2>Event Details:</h2>
                        <ul>
                            <li>Date: Saturday, 6th July 2024</li>
                            <li>Time: 2PM - 8PM WIB</li>
                            <li>Location: <a href="https://g.co/kgs/yTDjNfu" target="_blank">De Majestic</a></li>
                        </ul>

                        <p>Please find attached your official invitation and ticket for the event. Make sure to bring it with you on the day of the event for entry. Tickets will be awarded on July 1, 2024 via email.</p>

                        <h2>Additional Information:</h2>
                        <ul>
                            <li>Dress Code: Formal Attire, (Preferably Indonesian Traditional Formal Attire)</li>
                        </ul>

                        <h2>Join Our WhatsApp Group:</h2>
                        <p>To ensure you stay updated with the latest information and connect with fellow attendees, we have created a WhatsApp group. Please join the group using the following link: <a href="https://bit.ly/TEDXPUParticipants24" target="_blank">bit.ly/TEDXPUParticipants24</a></p>

                        <p>We look forward to seeing you at TEDxPadjadjaran University and sharing this incredible experience with you. If you have any questions or need further assistance, please do not hesitate to contact us at Nisa Aulia: +6285163091431.</p>

                        <p>Best regards,</p>
                        <p>The TEDxPadjadjaran University Team</p>
                        <img src="https://i.ibb.co.com/gr3HSkc/Whats-App-Image-2024-06-13-at-19-35-23-b3b4d433.jpg" alt="TEDxPadjadjaran University" style="width: 300px;">
                    </div>
                    `
        };
        try {
            await transporter.sendMail(mailOptions);
        } catch (error) {
            console.log(error);
        }
    }

    return NextResponse.json({
        code: 200,
        status: "Berhasil mengirim email!",
    })
}

export { GET };
