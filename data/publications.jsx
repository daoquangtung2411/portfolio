export const publications = [
    {
        title: "Harmonizing QSAR Machine Learning-Based Models and Docking Approaches for Identifying Novel Histone Deacetylase 2 Inhibitors",
        authors: "Dao Quang Tung, Do Thi Mai Dung, Nguyen Thanh Cong, Dao Ngoc Nam Hai, Daniel Baecker, Son Tung Ngo, Phan Thi Phuong Dung, Nguyen Thi Thuan, Nguyen Hai Nam, Nguyen Ngoc An",
        venue: "Chemistry Select",
        year: 2024,
        abstract: "Machine learning (ML) algorithms have gained widespread application in constructing computational models for predicting the bioactivity and physicochemical properties of numerous compounds, notably HDAC inhibitors. In this work, 2801 unique compounds with confirmed bioassays on HDAC2 were collected and employed to train ML models to virtually screening and possibly design potential inhibitors for HDAC2. A meticulous 3-step procedure was first proposed to ensure the hits are within the application domain of the screening models. Through virtual screening of 91 million compounds, 59 structures were suggested by the four highest predictability models as potential HDAC2 inhibitors. The bioactivity of these compounds is further confirmed through a validated docking protocol, wherein 57 out of the 59 active hits proposed by the four models exhibited superior affinity with HDAC2 compared to vorinostat, with docking scores ranging from −10.74 to −7.06 kcal/mol. Lead optimization strategies were then implemented on the top-performing compound from the molecular docking scores, CID 122648337, enhancing its binding affinity and interactions within the HDAC2 active site. This optimization led to the creation of two novel lead compounds, demonstrating higher affinity to HDAC2 than the initial hits. The stability of lead compounds in the active site was confirmed via MD simulations.",
        link: "https://doi.org/10.1002/slct.202400404",
        image: "https://i.ibb.co/MkrBLMQY/HDAC2.png",
        keyword: "Machine Learning, Docking Simulation, HDAC2 inbibitors, QSAR models, Virtual Screening"
    },
    {
        title: "Integrating machine learning and docking simulations for the screening and design of novel hdac2 inhibitors as anticancer agents",
        authors: "Do Thi Mai Dung, Nguyen Ngoc An, Dao Quang Tung, Thai Chinh Tam, Nguyen Thanh Cong , Pham Thi Kim Anh, Phan Thi Phuong Dung",
        venue: "TNU Journal of Science and Technology",
        year: 2025,
        abstract: "Histone deacetylase 2 (HDAC2) is a promising molecular target for anticancer drug design. This study collected and analyzed 2,809 compounds to train machine-learning models for identifying potential HDAC2 inhibitors. Virtual screening of 140 million structures identified 88 compounds with predicted HDAC2 inhibition superior to SAHA, confirmed by the top four models with over 85% accuracy. Docking studies further evaluated these, revealing 60 compounds with ΔG values between -12.3 to -16.5 kcal/mol, surpassing SAHA. Structural analysis led to the design of 16 new compounds with enhanced binding affinity. Two compounds, I and II, were predicted to outperform the original lead, forming additional interactions with the active site while maintaining zinc ion coordination. This research developed a machine learning model and proposed a screening procedure combined with docking to identify new compound structures with good inhibitory potential. This approach is not only suitable for HDAC2 but can be also applied to many biological targets.",
        link: "https://doi.org/10.34238/tnu-jst.11797",
        image: "https://i.ibb.co/m5P2CWMj/Screenshot-2026-01-17-at-09-40-16.png",
        keyword: "Machine Learning, QSAR, Drug Design, Molecular Docking, HDAC2 inhibitors"
    },
    {
        title: "Characterizing Potential BACE1 Inhibitors from ChEMBL Database using Knowledge-and Physics-Based Approaches",
        authors: "Tung Dao Quang, Dung Do Thi Mai, Quynh Mai Thai, Phuong-Thao Tran, Son Tung Ngo and Trung Hai Nguyen",
        venue: "ChemRxiv (preprint)",
        year: 2025,
        abstract: "The inhibition of β-site amyloid precursor protein cleaving enzyme 1 (BACE1) presents a promising therapeutic strategy for treating Alzheimer's disease (AD) by reducing amyloid-beta (Aβ) production. Despite the potential of BACE1 inhibitors, their clinical application has been hindered by challenges related to toxicity and efficacy. In this paper employed a computational approach which combines machine learning and atomistic simulations to accelerate the discovery of effective BACE1 inhibitors. Our ML models trained on a set of ligands with experimental binding affinity show high accuracy when tested on a hold-out test set. The best model was used to screen the CHEMBL33 chemical library to obtain a short list of top hit compounds which were urther analyzed using molecular docking and steered molecular dynamics (SMD) simulations. These simulations provided insights into the binding mechanisms and interaction dynamics with BACE1, highlighting vital residues and pharmacophores that could inform the design of novel AD therapeutics.",
        link: "10.26434/chemrxiv-2025-xccmh",
        image: "https://i.ibb.co/rK9PdNpG/Screenshot-2026-01-17-at-09-47-42.png",
        keyword: "Machine Learning, BACE1 inhibitors, Alzheimer diseases, Molecular Docking, Steered Molecular Dynamics"
    },
    {
        title: "Unveiling potent xanthine oxidase inhibitors in two Balanophora spp. using machine learning-based virtual screening and molecular docking approach",
        authors: "Nguyen Ngoc An, Dao Quang Tung, Le Van Tue, Nguyen Thanh Son, Nguyen Thanh Tung, Huong-Giang Le, Thai Chinh Tam, Nguyen Thị Thuan, Daniel Baecker & Do Thi Mai Dung",
        venue: "Scientific Reports",
        year: 2025,
        abstract: "Pharmacological studies revealed that the Balanophora species contains diverse phytochemicals which enable interesting biological activities and emphasize their pharmaceutical relevance. Previously, we identified significant xanthine oxidase (XO) inhibitory activity from extracts of the two Balanophora spp. (Balanophora subcupularis P.C. Tam and Balanophora tobiracola Makino). However, the specific compounds responsible for this activity remain unidentified so far. Thus, in the present study, we focused on elucidating the compounds inducing the XO inhibitory effect of extracts from Balanophora species. Therefore, a combination of advanced liquid chromatography and mass spectrometry (LC-QToF-HRMS), virtual screening using machine learning (ML) models, and molecular docking simulation was applied. Using LC-QToF-HRMS, 23 and 21 compounds were identified in the ethyl acetate fractions of B. subcupularis and B. tobiracola, respectively. Next, a curated dataset of natural and synthetic compounds with known XO inhibitory activity was employed to train several ML models. Adducing five selected ML models, the virtual screening process identified the potentially active compounds 1-(3,4-dihydroxyphenyl)-6,7-dihydroxy-1,2-dihydro-2,3-naphthalenedicarboxylic acid, taxifolin, and 1-O-caffeoyl-6-O-(S)-brevifolincarboxyl-β-D-glucopyranose. All the compounds found in the two Balanophora spp. underwent docking simulations, in which MTE, FES, and AFH were retained in the active site of XO, ensuring reliable re-docking results. Finally, taxifolin emerged as the most promising novel XO inhibitor, demonstrating greater potential than the established drug allopurinol, as supported by both the virtual screening nomination and docking simuation. These findings contribute to the development of natural XO inhibitors and may open new opportunities for gout treatment and uric acid level control.",
        link: "https://doi.org/10.1038/s41598-025-32282-6",
        image: "https://i.ibb.co/j9NNMmXb/Screenshot-2026-01-17-at-09-50-48.png",
        keyword: "Balanophora species, Xanthine oxidase inhibitors, Machine learning, Molecular Docking, XGBoost"
    },
    {
        title: "Identifying Potential BACE1 Inhibitors from the ChEMBL Database Using Machine Learning and Atomistic Simulation Approaches",
        authors: "Quang Tung Dao, Thi Mai Dung Do, Quynh Mai Thai, Phuong-Thao Tran, Son Tung Ngo, Trung Hai Nguyen",
        venue: "ACS Omega",
        year: 2026,
        abstract: "The inhibition of β-site amyloid precursor protein-cleaving enzyme 1 presents a promising therapeutic strategy for treating Alzheimer’s disease by reducing amyloid-β (Aβ) production. This paper employed a computational approach that combined machine learning (ML) and atomistic simulations to accelerate the discovery of potential BACE1 inhibitors. Our ML models, trained on a set of ligands with experimental binding affinity, showed high accuracy when tested on a holdout test set. The best model was used to screen more than two million compounds in the CHEMBL33 chemical library to obtain a short list of top-hit compounds, which were further analyzed using molecular docking and fast pulling of ligand (FPL) simulations. The insights into structure and binding energetics obtained from FPL simulations elucidate the stability and interaction mechanisms of the BACE1-ligand bound state, providing data useful for the rational design of novel AD therapeutics.",
        link: "10.1021/acsomega.5c07081",
        image: "https://i.ibb.co/wF1V9SB8/ao5c10459-0008.webp",
        keyword: "BACE1 inhibitors, Alzeihmer Disease, Amyloid Theory, Molecular Docking, Virtual Screening, Machine Learning, Molecular Dynamics"
    },
    {
        title: "Benchmarking the Ligand–HER2 Interactions Using Machine Learning and Molecular Dynamics Simulations",
        authors: "Duc Toan Truong, Quang Tung Dao, Thi Thuy Mai Tran, Ngoc Ha Nguyen, My-Kristyna Nguyen-Thao, Nguyen-Hai Nam, Thi Mai Dung Do, Minh Tho Nguyen",
        venue: "ACS Omega",
        year: 2026,
        abstract: "Understanding the inhibitor–HER2 interaction mechanism remains a critical challenge in combating breast cancer. In the present work, the role of five critical residues that are deeply located in the HER2 active site was recognized. To win the race against time in learning the activities of the HER2 tyrosine kinase protein, we employed a stepwise computational procedure including a machine learning predictive regression model, atomistic molecular dynamics (MD) simulations, and the umbrella sampling MD method. A systematic mining of a data set of 8 million chemical compounds allowed us to finally identify 13 candidates whose capacities as anti-HER2 have not been reported before. Based on the computed results, a benchmark for the strength of the ligand–HER2 interaction has been established. Although van der Waals potential energy tends to stabilize ligand–protein associations, the ligand that electrostatically interacts with five residues, Lys753, Leu796, Thr798, Asp863, and Asp880, is a key factor in deciding the inhibitor strength. Significantly, the strong binding of compound lig233 was exemplified by its ability to form hydrogen bonds with Asp863 and Asp880 and maintain exceptionally short distances to many key residues, indicating the formation of strong chemical bonds. Lig233 also exhibits a binding free energy of −47 kcal/mol, two times as large as that of −21 kcal/mol for the known drug lapatinib. The fresh understanding achieved in the present study can lead to the necessary adjustments in the experimental development of HER2 inhibitors.",
        link: "10.1021/acsomega.5c10459",
        image: "https://i.ibb.co/wF1V9SB8/ao5c10459-0008.webp",
        keyword: "HER2, Machine Learning, Deep Learning, Variational Autoencoder, Molecular Docking, Molecular Dynamics"
    },
];
