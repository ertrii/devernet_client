export interface Debts {
    description: string
    units?: number | null
    unit_price?: number | null
    price: number
}

export interface ReceiptData {
    date: string
    due_date: string
    debts: Debts[]
    discount: number
    description: string
}

export interface Client {
    name: string
    phone_number: number
    email?: string
    address?: string
}

export default function printTextCtx(
    ctx: CanvasRenderingContext2D,
    client: Client,
    receipt_data: ReceiptData
) {
    ctx.font = '12px Roboto'
    ctx.fillStyle = 'black'
    ctx.fillText(client.name, 125, 358)
    ctx.fillText(client.phone_number.toString(), 125, 380)
    ctx.fillText(receipt_data.date, 600, 220)
    ctx.fillText(receipt_data.due_date, 600, 285)
    receipt_data.debts.forEach(({ description, units, unit_price, price }, i) => {
        const space = i * 27
        ctx.fillText(description, 130, 493 + space)
        ctx.fillText(units?.toString() || '', 550, 493 + space)
        ctx.fillText(unit_price ? `S/. ${unit_price}` : '', 600, 493 + space)
        ctx.fillText(`S/.${price}`, 675, 493 + space)
    })
    const partial = receipt_data.debts.reduce((a, b) => a + b.price, 0)
    ctx.fillText(`S/.${partial}`, 680, 660)
    ctx.fillText(`S/.${receipt_data.discount}`, 680, 690)
    ctx.font = '20px Roboto'
    ctx.fillText(`S/.${partial - receipt_data.discount}`, 680, 728)
    ctx.fillStyle = 'black'
    ctx.font = '12px Roboto'
    ctx.fillText(receipt_data.description, 240, 785)
}
