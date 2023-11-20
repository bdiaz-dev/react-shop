import { useEffect } from 'react'
import { useShoppingCart } from '../stores/shoppingCartStore'
import '../styles/AddedNotify.css'
import { useState } from 'react'

export function AddedNotify() {
    const { setLatest, latestProduct } = useShoppingCart()
    const [onScreen, setOnscreen] = useState(false)

    const notify = () => {
        if (!latestProduct) return
        if (onScreen) return
        setOnscreen(true)
        const notify = document.querySelector('.AddedNotify')
        notify.style.top = '10px'
        setTimeout(() => { notify.style.top = '-90px'; setOnscreen(false); setLatest(''); }, 2000)
    }

    useEffect(notify, [latestProduct, setLatest])

    return (
        <div className="AddedNotify">
            <b>Added {latestProduct}</b>
        </div>
    )
}