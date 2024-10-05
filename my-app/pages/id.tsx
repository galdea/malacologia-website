import { google } from "googleapis";
import { promises as fs } from "fs";
import path from "path";
import { useState } from "react";

const families = [
   "ACANTHOCHITONIDAE", "ACAVIDAE", "ACHATINELLIDAE", "ACHATINIDAE", "ACMAEIDAE", "ACTEONIDAE", "AMASTRIDAE", "AMPULLARIIDAE",
    "ANCYLIDAE",
"ANNULARIIDAE",
"APORRHAIDAE", "ARCHITECTONICIDAE", "ARCIDAE", "ARCTICIDAE", "ARGONAUTIDAE", "ARIOPHANTIDAE", "ASTARTIDAE", "BABYLONIIDAE", "BARLEEIIDAE", "BATHYDORIDIDAE",
"BATILLARIIDAE", "BENTHOBIIDAE", "BITHYNIIDAE", "BOTHRIEMBRYONTIDAE",
"BRADYBAENIDAE", "BUCCINIDAE", "BULIMULIDAE", "BULLIDAE", "BURSIDAE",
"BUSYCONIDAE", "CAECIDAE", "CALAPPIDAE", "CALLIOSTOMATIDAE",
"CALLOCHITONIDAE", "CALYPTRAEIDAE", "CAMAENIDAE", "CAMBARIDAE",
"CANCELLARIIDAE", "CAPULIDAE", "CARANGIDAE", "CARDIIDAE", "CARDITIDAE",
"CARYCHIIDAE", "CARYODIDAE", "CASSIDAE", "CAVOLINIIDAE", "CEPOLIDAE",
"CERASTIDAE", "CERIIDAE", "CERITHIIDAE", "CERITHIOPSIDAE", "CERVIDAE",
"CHAMIDAE", "CHARONIDIIDAE", "CHAROPIDAE", "CHILINIDAE", "CHILODONTAIDAE",
"CHONDRINIDAE", "CHRONIDAE", "CIONELLIDAE", "CLAUSILIIDAE", "CLAVATORIDAE",
"CLYPEASTERIDAE", "COCHLESPIRIDAE", "COLLONIIDAE", "COLUMBARIIDAE",
"COLUMBELLIDAE", "COMINELLIDAE", "CONIDAE", "CORBULIDAE", "CORILLIDAE",
"COSTELLARIIDAE", "CRASSATELLIDAE", "CREPIDULIDAE", "CRESEIDAE",
"CUCULLAEIDAE", "CURCULIONIDAE", "CUSDIDARIIDAE", "CYAMIIDAE",
"CYCLOPHORIDAE", "CYLICHNIDAE", "CYMATIIDAE", "CYPRAEIDAE",
"CYPRINIDAE", "CYRENIDAE", "CYSTISCIDAE", "DENTALIIDAE", "DIOGENIDAE",
"DIPLOMMATINIDAE", "DISCIDAE", "DONACIDAE", "DORCASIIDAE", "DORIDIDAE",
"DREISSENIDAE", "DRILLIIDAE", "DYAKIIDAE", "ELLOBIIDAE", "ENDODONTIDAE",
"ENIDAE", "EPITONIIDAE", "EUCALODIIDAE", "EUCROIADAE", "EUCYCLIDAE",
"EULIMIDAE", "EVANIIDAE", "FASCIOLARIIDAE", "FERUSSACIIDAE", "FICIDAE",
"FISSURELLIDAE", "GADILIDAE", "GASTROCOPTIDAE", "GLOSSIDAE", "GLYCYMERIDIDAE",
"HALIOTIDAE", "HAMINOEIDAE", "HAPLOTREMATIDAE", "HARPIDAE", "HELICARIONIDAE",
"HELICIDAE", "HELICINIDAE", "HELICODISCIDAE", "HELMINTHOGLYPTIDAE", "HIATELLIDAE",
"HIPPIDAE", "HIPPONICIDAE", "HYDROBIIDAE", "HYGROMIIDAE", "HYRIIDAE",
"INACHIDAE", "IRIDINIDAE", "JANTHINIDAE", "LABYRINTHIDAE", "LASAEIDAE",
"LIMACIDAE", "LIMIDAE", "LIMOPSIDAE", "LITIOPIDAE", "LITTORINIDAE",
"LOLIGINIDAE", "LOTTIIDAE", "LUCINIDAE", "LYMNAEIDAE", "LYONSIIDAE",
"MACTRIDAE", "MAIZANIIDAE", "MALLEIDAE", "MANGELIIDAE", "MARGARITIDAE",
"MARGARITIFERIDAE", "MARGINELLIDAE", "MEGALEDONIDAE", "MEGALOMASTOMIDAE",
"MEGASPIRIDAE", "MEGOMPHICIDAE", "MELONGENIDAE", "MESODESMATIDAE", "MITRIDAE",
"MODULIDAE", "MOPALIIDAE", "MURICIDAE", "MYCETOPODIDAE", "MYIDAE",
"MYTILIDAE", "NACELLIDAE", "NASSARIIDAE", "NATICIDAE", "NAUTILIDAE",
"NEOMENIIDAE", "NERITIDAE", "NOETIIDAE", "NOTAEOLIDIIDAE", "NUCULANIDAE",
"NUCULIDAE", "OBTORTIONIDAE", "OCTOPODIDAE", "ODONTOSTOMIDAE", "OLEACINIDAE",
"OLIVIDAE", "OPHIURIDAE", "OPISTHOTEUTHIDAE", "ORCULIDAE", "OREOHELICIDAE",
"ORTHALICIDAE", "OSTREIDAE", "OVULIDAE"
];

const SheetDataPage = ({ data, error }) => {
    const [selectedFamily, setSelectedFamily] = useState("ACANTHOCHITONIDAE");
    const [showFilteredRows, setShowFilteredRows] = useState(false);
    const [selectedLetter, setSelectedLetter] = useState(null); // Track selected letter

    // Group families by their first letter, ensuring the value is valid
    const families = [...new Set(data.map(row => row[0]).filter(Boolean))]; // Remove undefined values
    const groupedFamilies = families.reduce((acc, family) => {
        if (typeof family === 'string' && family.length > 0) { // Check if family is a valid string
            const firstLetter = family.charAt(0).toUpperCase();
            if (!acc[firstLetter]) {
                acc[firstLetter] = [];
            }
            acc[firstLetter].push(family);
        }
        return acc;
    }, {});

    // Filtered data based on selected family
    const filteredData = data.filter((row) => row[0] === selectedFamily);

    const handleToggle = (family) => {
        setSelectedFamily(family);
        setShowFilteredRows(true);
    };

    const handleLetterClick = (letter) => {
        setSelectedLetter(letter); // Set the selected letter
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Colección Malecológica</h1>
            {error && <p className="text-red-600 text-center">{error}</p>}
            
            <div className="className=mb-4 flex flex-col">
                {Object.keys(groupedFamilies).sort().map((letter) => (
                    <div key={letter} className="m-2">
                        <button
                            onClick={() => handleLetterClick(letter)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            {letter}
                        </button>
                        {selectedLetter === letter && (
                            <div className="flex flex-wrap">
                                {groupedFamilies[letter].map((family) => (
                                    <button
                                        key={family}
                                        onClick={() => handleToggle(family)}
                                        className={`bg-blue-300 text-white px-3 py-1 rounded-md m-1 ${selectedFamily === family ? 'font-bold' : ''}`}
                                    >
                                        {family}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {showFilteredRows && filteredData.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 text-left">
                                {filteredData[0].map((header, index) => (
                                    <th key={index} className="py-3 px-4 border-b">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.slice(1).map((row, index) => (
                                <tr key={index} className="hover:bg-gray-100 transition duration-200">
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className="py-3 px-4 border-b text-gray-600">
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : showFilteredRows ? (
                <p className="text-center text-gray-600">No data found for {selectedFamily}.</p>
            ) : (
                <p className="text-center text-gray-600">Select a family to view data.</p>
            )}
        </div>
    );
};

export async function getServerSideProps() {
    const keyPath = path.join(process.cwd(), "secrets.json");
    const keyFile = await fs.readFile(keyPath, "utf-8");
    const key = JSON.parse(keyFile);

    const auth = new google.auth.GoogleAuth({
        credentials: key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = "16w2N5fkvxMfgvIap1xNWt6HaltVCx6_ioRkWLm-DPrs"; // Update with your sheet ID
    const range = "Sheet1!A:S"; // Adjust the range as necessary

    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const data = response.data.values || [];
        return { props: { data } };
    } catch (error) {
        return { props: { error: error.message } };
    }
}

export default SheetDataPage;