export default async  function Docs({
    params
}: {
    params: Promise<{slug: string[]}>
}) {
    const {slug} = await params;

    // if slug exists and length is 2
    if (slug?.length === 2) {
        return (
            <h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>
        );
    } else if (
            slug?.length === 1) {
                return <h1></h1>
    }
    return <h1>Docs home page</h1>

    }