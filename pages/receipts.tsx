import { Heading } from '@chakra-ui/layout'
import { useEffect, useRef } from 'react'
import Container from '../components/containers/Container'
import printTextCtx, { Client, ReceiptData } from '../utils/printTextCtx'
import client from '../db/katy/__info__.json'
import may from '../db/katy/5_may.json'

function process(ctx: CanvasRenderingContext2D) {
    const base_image = new Image()
    base_image.src = 'images/receipts_template.png'
    base_image.onload = function () {
        ctx.drawImage(base_image, 0, 0)
        printTextCtx(ctx, client as Client, may as ReceiptData)
    }
}

export default function Receipts() {
    const ref_canvas = useRef<HTMLCanvasElement>(null)
    const ref_a = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        const context = ref_canvas.current?.getContext('2d')
        context && process(context)
    }, [])

    function handleClick() {
        const canva = ref_canvas.current
        const a = ref_a.current
        if (a && canva) {
            a.href = canva?.toDataURL()
        }
    }

    return (
        <Container className="m-5">
            <Heading>Recivos </Heading>
            <a
                ref={ref_a}
                href="#"
                download="recivo.jpg"
                onClick={handleClick}
                style={{ textDecoration: 'underline' }}
            >
                Descargar Recivo: {client.name}
            </a>
            <canvas width={892} height={1160} ref={ref_canvas}></canvas>
        </Container>
    )
}
