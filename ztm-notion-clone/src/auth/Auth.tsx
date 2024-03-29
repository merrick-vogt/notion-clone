import { useState, FormEvent } from "react"
import { useAuthSession } from "./AuthSessionContext"
import { Navigate } from "react-router-dom"
import styles from "../utils.modules.css"
import { supabase } from "../supabaseClient"

export const Auth = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const { session } = useAuthSession()

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setLoading(true)
            const { error } = await supabase.auth.signInWithOtp({ email })
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error: any) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    if (session) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <h1>Notes App</h1>
            <p>Sign in to continue</p>
            {loading ? ("Sending link ...") : (
                <form onSubmit={handleLogin}>
                    <label>Email: </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                    />
                    <button>
                        Send Magic Link
                    </button>
                </form>
            )}
        
        </div>
    )
}
