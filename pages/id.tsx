import { google } from "googleapis";
import { promises as fs } from "fs";
import path from "path";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import 'aos/dist/aos.css';
import "/public/assets/css/plugins/bootstrap.min.css";
import "/public/assets/css/plugins/font-awesome-pro.css";
import "/public/assets/css/plugins/nice-select.css";
import "/public/assets/css/plugins/swiper.bundle.css";
import "/public/assets/icon/font-awesome/css/all.css";
// import "/public/assets/css/plugins/owl.carousel.min.css";
import "/public/assets/css/plugins/modal-video.min.css";
import "/public/assets/css/plugins/mobile.css";
import "/public/assets/css/plugins/aos.css";
import "/public/assets/css/typography.css";
import "/public/assets/css/master.css";
import "/public/assets/css/plugins/responsive.css";

const families = [
    "ACANTHOCHITONIDAE", "ACAVIDAE", "ACHATINELLIDAE", "ACHATINIDAE", "ACMAEIDAE", "ACTEONIDAE", "AMASTRIDAE", "AMPULLARIIDAE",
    "ANCYLIDAE", "ANNULARIIDAE", "APORRHAIDAE", "ARCHITECTONICIDAE", "ARCIDAE", "ARCTICIDAE", "ARGONAUTIDAE", "ARIOPHANTIDAE", "ASTARTIDAE",
    "BITHYNIIDAE", "BUCCINIDAE", "BULLIDAE", "BURSIDAE", "CAECIDAE", "CALAPPIDAE", "CALLIOSTOMATIDAE",
    "CALLOCHITONIDAE", "CALYPTRAEIDAE", "CAMAENIDAE", "CAMBARIDAE", "CANCELLARIIDAE", "CAPULIDAE", "CARANGIDAE", "CARDIIDAE", "CARDITIDAE",
    "CARYCHIIDAE", "CARYODIDAE", "CASSIDAE", "CAVOLINIIDAE", "CEPOLIDAE", "CERASTIDAE", "CERIIDAE", "CERITHIIDAE", "CERITHIOPSIDAE", "CERVIDAE",
    "CHAMIDAE", "CHARONIDIIDAE", "CHAROPIDAE", "CHILINIDAE", "CHILODONTAIDAE", "CHONDRINIDAE", "CHRONIDAE", "CIONELLIDAE", "CLAUSILIIDAE", "CLAVATORIDAE",
    "CLYPEASTERIDAE", "COCHLESPIRIDAE", "COLLONIIDAE", "COLUMBARIIDAE", "COLUMBELLIDAE", "COMINELLIDAE", "CONIDAE", "CORBULIDAE", "CORILLIDAE",
    "COSTELLARIIDAE", "CRASSATELLIDAE", "CREPIDULIDAE", "CRESEIDAE", "CUCULLAEIDAE", "CURCULIONIDAE", "CUSDIDARIIDAE", "CYAMIIDAE",
    "CYCLOPHORIDAE", "CYLICHNIDAE", "CYMATIIDAE", "CYPRAEIDAE", "CYPRINIDAE", "CYRENIDAE", "CYSTISCIDAE", "DENTALIIDAE", "DIOGENIDAE",
    "DIPLOMMATINIDAE", "DISCIDAE", "DONACIDAE", "DORCASIIDAE", "DORIDIDAE", "DREISSENIDAE", "DRILLIIDAE", "DYAKIIDAE", "ELLOBIIDAE", "ENDODONTIDAE",
    "ENIDAE", "EPITONIIDAE", "EUCALODIIDAE", "EUCROIADAE", "EUCYCLIDAE", "EULIMIDAE", "EVANIIDAE", "FASCIOLARIIDAE", "FERUSSACIIDAE", "FICIDAE",
    "FISSURELLIDAE", "GADILIDAE", "GASTROCOPTIDAE", "GLOSSIDAE", "GLYCYMERIDIDAE", "HALIOTIDAE", "HAMINOEIDAE", "HAPLOTREMATIDAE", "HARPIDAE", "HELICARIONIDAE",
    "HELICIDAE", "HELICINIDAE", "HELICODISCIDAE", "HELMINTHOGLYPTIDAE", "HIATELLIDAE", "HIPPIDAE", "HIPPONICIDAE", "HYDROBIIDAE", "HYGROMIIDAE", "HYRIIDAE",
    "INACHIDAE", "IRIDINIDAE", "JANTHINIDAE", "LABYRINTHIDAE", "LASAEIDAE", "LIMACIDAE", "LIMIDAE", "LIMOPSIDAE", "LITIOPIDAE", "LITTORINIDAE",
    "LOLIGINIDAE", "LOTTIIDAE", "LUCINIDAE", "LYMNAEIDAE", "LYONSIIDAE", "MACTRIDAE", "MAIZANIIDAE", "MALLEIDAE", "MANGELIIDAE", "MARGARITIDAE",
    "MARGARITIFERIDAE", "MARGINELLIDAE", "MEGALEDONIDAE", "MEGALOMASTOMIDAE", "MEGASPIRIDAE", "MEGOMPHICIDAE", "MELONGENIDAE", "MESODESMATIDAE", "MITRIDAE",
    "MODULIDAE", "MOPALIIDAE", "MURICIDAE", "MYCETOPODIDAE", "MYIDAE", "MYTILIDAE", "NACELLIDAE", "NASSARIIDAE", "NATICIDAE", "NAUTILIDAE",
    "NEOMENIIDAE", "NERITIDAE", "NOETIIDAE", "NOTAEOLIDIIDAE", "NUCULANIDAE", "NUCULIDAE", "OBTORTIONIDAE", "OCTOPODIDAE", "ODONTOSTOMIDAE", "OLEACINIDAE",
    "OLIVIDAE", "OPHIURIDAE", "OPISTHOTEUTHIDAE", "ORCULIDAE", "OREOHELICIDAE", "ORTHALICIDAE", "OSTREIDAE", "OVULIDAE"
];
export async function getServerSideProps() {
  const keyPath = path.join(process.cwd(), "secrets.json");
  const keyFile = await fs.readFile(keyPath, "utf-8");
  const key = JSON.parse(keyFile);

  const auth = new google.auth.GoogleAuth({
      credentials: key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

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
      // Type guard to check if 'error' is an instance of Error
      if (error instanceof Error) {
          return { props: { error: error.message } };
      } else {
          // Fallback in case the error is not an instance of Error
          return { props: { error: "Error al recuperar la base de datos" } };
      }
  }
}

type SheetDataPageProps = {
data: string[][];
error: string | null; // Updated to handle error
};

const SheetDataPage = ({ data, error }: SheetDataPageProps) => {
const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
const [selectedFamily, setSelectedFamily] = useState<string | null>(null);
const [showFilteredRows, setShowFilteredRows] = useState(false);

// Filter data based on selected family or letter
const filteredData = data.filter(
    (row) => row[0] === selectedFamily || row[0] === selectedLetter
);

// Group families by their first letter
const groupedFamilies: { [key: string]: string[] } = families.reduce(
    (acc: { [key: string]: string[] }, family: string) => {
        const firstLetter = family.charAt(0).toUpperCase();
        if (!acc[firstLetter]) acc[firstLetter] = [];
        acc[firstLetter].push(family);
        return acc;
    },
    {}
);

const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setShowFilteredRows(false);
};

const handleFamilyClick = (family: string) => {
    setSelectedFamily(family);
    setShowFilteredRows(true);
};

  return (
      <Layout headerStyle={25} footerStyle={13} breadcrumbTitle="Colección Malecológica">
          <div className="welcome-area text-center pt-110 pb-120">
              <div className="container">
                  <h2 className="text-4xl font-bold mb-10">Familias Malecológicas</h2>

                  {/* Display error message if it exists */}
                  {error && <div className="text-red-500 mb-5">{error}</div>}

                  <div className="grid grid-cols-5 gap-5 mb-10">
                      {Object.keys(groupedFamilies).map((letter) => (
                          <button
                              key={letter}
                              className={`w-full border border-gray-400 rounded p-2 ${
                                  selectedLetter === letter ? "bg-blue-500 text-white" : "bg-white"
                              }`}
                              onClick={() => handleLetterClick(letter)}
                          >
                              {letter}
                          </button>
                      ))}
                  </div>
                  {selectedLetter && (
                      <div className="mb-10">
                          <h3 className="text-2xl font-bold mb-5">Familias que empiezan con {selectedLetter}</h3>
                          <div className="grid grid-cols-5 gap-5">
                              {groupedFamilies[selectedLetter].map((family) => (
                                  <button
                                      key={family}
                                      className={`w-full border border-gray-400 rounded p-2 ${
                                          selectedFamily === family ? "bg-green-500 text-white" : "bg-white"
                                      }`}
                                      onClick={() => handleFamilyClick(family)}
                                  >
                                      {family}
                                  </button>
                              ))}
                          </div>
                      </div>
                  )}
                  {showFilteredRows && (
                      <div>
                          <h3 className="text-xl font-bold mb-5">
                              Resultados para {selectedFamily}
                          </h3>
                          <table className="min-w-full border border-gray-300">
                              <thead>
                                  <tr>
                                      {data[0]?.map((header, index) => (
                                          <th key={index} className="border border-gray-300 px-4 py-2">{header}</th>
                                      ))}
                                  </tr>
                              </thead>
                              <tbody>
                                  {filteredData.map((row, rowIndex) => (
                                      <tr key={rowIndex} className="border border-gray-300">
                                          {row.map((cell, cellIndex) => (
                                              <td key={cellIndex} className="border border-gray-300 px-4 py-2">{cell}</td>
                                          ))}
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>
                  )}
              </div>
          </div>
      </Layout>
  );
};

export default SheetDataPage;