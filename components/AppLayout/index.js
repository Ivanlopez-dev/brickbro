export default function AppLayout ({children}) {
    return (
        <>
        <main>
            {children}
        </main>
        <style jsx global>{`

            html,
            body,
            h1 {
              font-family: 'Space Grotesk', sans-serif;
            }
        `}</style>
        </>
    )
}