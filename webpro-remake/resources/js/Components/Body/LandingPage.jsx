const LandingPage = () => {
    return (
        <div class="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
            <div class="pt-32 pb-12 md:pt-40 md:pb-20">
                <div class="text-center pb-12 md:pb-16">
                    <h1 class="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"><span class="mb-11 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Code Fun.</span><br />All in One Information Platform for Students.</h1>
                    <div class="max-w-3xl mx-auto">
                        <p class="text-xl text-gray-600 mb-8">Bingun cari informasi seputar kompetisi, bootcamp, workshop, seminar, webinar? Tenang aja, semua ada di Code Fun, pantengin terus biar ga ketinggalan infonya.</p>
                        <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                            <div>
                                <a class="inline-block rounded-lg border px-8 py-3 text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="register">Get Started</a>
                            </div>
                            <div>
                                <a className="inline-block rounded-lg border px-8 py-3 text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 " href="#0">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage