export default function generateInviteID() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let inviteID = '';
    
    for (let i = 0; i < 12; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        inviteID += caracteres[indice];
    }
    
    return inviteID;
}