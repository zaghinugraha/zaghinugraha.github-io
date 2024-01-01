export default function Newsletter() {
    return (
        <div class="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
            <div class="grid md:grid-cols-2 gap-8">
                <div class="max-w-md">
                    <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Berlangganan Sekarang!</h2>
                    <p class="mt-3 text-gray-600 dark:text-gray-400">
                        Berlanggan email, agar tidak terlewat informasi menarik seputar<span class="mb-11 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> Code Fun.</span>
                    </p>
                </div>

                <form>
                    <div class="w-full sm:max-w-lg md:ms-auto">
                        <div class="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                            <div class="w-full">
                                <label for="hero-input" class="sr-only">Search</label>
                                <input type="text" id="hero-input" name="hero-input" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Masukkan email"></input>
                            </div>
                            <a class="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                Daftar
                            </a>
                        </div>
                        <p class="mt-3 text-sm text-gray-500">
                            Tidak spam, batalkan berlangganan kapan saja.
                        </p>
                    </div>
                </form>
            </div>
        </div>

    )
}