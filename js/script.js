<form id="generate-form" class="mt-4">
<input 
id="url"
type="url" 
placeholder="Enter a URL"
class="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5" />

<select id="size" class="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none">
    <option value="100">100*100</option>
    <option value="200">200*200</option>
    <option value="300" selected>300*300</option>
    <option value="400">400*400</option>
    <option value="500">500*500</option>
    <option value="600">600*600</option>
    <option value="700">700*700</option>
</select>

<button class="bg-grey-600 rounded w-full text-white py-3 px-4 mt-5 hover:bg-black" type="submit">Generate QR Code</button>
</form> 