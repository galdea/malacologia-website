import { google } from "googleapis";
import { promises as fs } from "fs";
import path from "path";
import { useState } from "react";
import Layout from "../components/layout/Layout"
import 'aos/dist/aos.css';
import "/public/assets/css/plugins/bootstrap.min.css"
import "/public/assets/css/plugins/font-awesome-pro.css"
import "/public/assets/css/plugins/nice-select.css"
import "/public/assets/css/plugins/swiper.bundle.css"
import "/public/assets/icon/font-awesome/css/all.css"
// import "/public/assets/css/plugins/owl.carousel.min.css"
import "/public/assets/css/plugins/modal-video.min.css"
import "/public/assets/css/plugins/mobile.css"
import "/public/assets/css/plugins/aos.css"
import "/public/assets/css/typography.css"
import "/public/assets/css/master.css"
import "/public/assets/css/plugins/responsive.css"

const families = [
   "ACANTHOCHITONIDAE", "ACAVIDAE", "ACHATINELLIDAE", "ACHATINIDAE", "ACMAEIDAE", "ACTEONIDAE", "AMASTRIDAE", "AMPULLARIIDAE",
    "ANCYLIDAE",
"ANNULARIIDAE",
"APORRHAIDAE", "ARCHITECTONICIDAE", "ARCIDAE", "ARCTICIDAE", "ARGONAUTIDAE", "ARIOPHANTIDAE", "ASTARTIDAE",
"BITHYNIIDAE", "BUCCINIDAE", "BULLIDAE", "BURSIDAE", "CAECIDAE", "CALAPPIDAE", "CALLIOSTOMATIDAE",
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

type SheetDataPageProps = {
  data: string[][];
  error: string | null;
};

const SheetDataPage = ({ data, error }: SheetDataPageProps) => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);
  const [showFilteredRows, setShowFilteredRows] = useState(false);
  const filteredData = data.filter((row) => row[0] === selectedFamily || row[0] === selectedLetter);

    // Group families by their first letter
    const groupedFamilies: { [key: string]: string[] } = families.reduce((acc: { [key: string]: string[] }, family: string) => {
      const firstLetter = family.charAt(0).toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(family);
      return acc;
    }, {});
  
    // Filtered data based on selected family

    const handleLetterClick = (letter: string) => {
      setSelectedLetter(letter); // This works as expected.
      setShowFilteredRows(false); // Reset the filtered view
    };
    
    const handleFamilyClick = (family: string) => {
      setSelectedFamily(family);
      setShowFilteredRows(true);
    };
    
    
    return (
        <Layout headerStyle={25} footerStyle={13}>
                <div className="welcome-preview-section-area">
                <h1 className="text-center text-white pb-4">Colección Malecológica Antonio Elizalde</h1>
          {error && <p className="text-danger text-center">{error}</p>}
      
          <div className="row">
            {/* Left Menu: Alphabet */}
            <div className="col-md-1">
              <div className="d-flex flex-column">
                {Object.keys(groupedFamilies).sort().map((letter) => (
                  <button
                    key={letter}
                    onClick={() => handleLetterClick(letter)}
                    className={`mb-2 p-2 rounded bg-primary text-white ${selectedLetter === letter ? "font-weight-bold" : ""}`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
      
            {/* Middle Menu: Families */}
            <div className="col-md-2">
              {selectedLetter && (
                <div className="d-flex flex-column">
                  {groupedFamilies[selectedLetter]?.map((family) => (
                    <button
                      key={family}
                      onClick={() => handleFamilyClick(family)}
                      className={`mb-2 p-2 rounded bg-info text-white ${selectedFamily === family ? "font-weight-bold" : ""}`}
                    >
                      {family}
                    </button>
                  ))}
                </div>
              )}
            </div>
      
            {/* Right: Family Information */}
            <div className="col-md-6">
              {showFilteredRows && filteredData.length > 0 ? (
                <table className="table table-bordered table-striped">
                  <thead className="thead-light">
                    <tr>
                      {filteredData[0].map((header, index) => (
                        <th key={index}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.slice(1).map((row, index) => (
                      <tr key={index} className="hover-table-row">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-white">Selecciona la familia para revisar su data.</p>
              )}
            </div>
          </div>
        </div>
      </Layout>
      
    );
  };
  
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
      return { props: { error: error.message } };
    }
  }
  
  export default SheetDataPage;