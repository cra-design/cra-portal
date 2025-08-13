# CRA portal

Project site for CRA portal tests. 

## Important links

- [Sign in to your CRA Account](https://cra-design.github.io/cra-portal/index.html)
- [Portal login demo](https://psi3b8.axshare.com/wel-01_eng.html?code=2591eff34de5015c197a7a422f2bec7a)
- [GST for small businesses COP github repository](https://github.com/cra-design/gst-hst-business/)
- [T1 COP github repository](https://github.com/cra-design/T1-cop/)
- [github.dev](https://github.dev/cra-design/cra-portal/blob/main/)

## MYBA Portal GST Interaction path

```mermaid
flowchart TD
 subgraph RT001["A-MBA-RT-001"]
        RT001A["Version 1"]
        RT001B["Version 2"]
        RT001C["Version 3"]
  end
 subgraph VR01["VR-01"]
        VR01A["Version 1"]
        VR01B["Version 2"]
        VR01C["Version 3"]
  end
    A["In your CRA account"] --> B(["Sign in to your CRA account"])
    B -- Sign in --> WEL["WEL.01"]
    WEL -- ABC INDUSTRIES --> MBA08["A-MBA-08"]
    MBA08 -- RT0001 --> RT001
    RT001 -.-> RTTAB1["Returns"] & RTTAB2["Elections"]
    RTTAB1 -- File a return --> FR00["FR-00"]
    RTTAB1 -- View return details --> VR01
    RTTAB1 -- Adjust a return --> AR01["AR-01"]
    RTTAB2 -- File an election --> SP01["SP-01"]
    RTTAB2 -- View elections --> VE01["VE-01"]
    AR01 -- GST/HST return for registrants --> AR08["AR-08"]
    AR08 -- GST/HST return for registrants review --> AR08R["AR-08R"]
    AR08R -- Adjust a return confirmation --> AR09["AR-09"]
    FR00 -- GST/HST NETFILE --> FR01["FR-01"]
    FR01 -- GST/HST return for registrants --> FR08["FR-08"]
    FR08 -- GST/HST return for registrants review --> FR08R["FR-08R"]
    FR08R -- GST/HST NETFILE confirmation --> FR09["FR-09"]
    SP01 -- Election or revocation of an election to change a GST/HST fiscal year --> FE01["FE-01"]
    FE01 -- Notification of GST/HST Accounting Periods --> FE08["FE-08"]
    FE10["FE10"] -- File an election confirmation --> FE11["FE-11"]
    SP01 -- Election for GST/HST reporting period --> FE10
    SP01 -- Notification of GST/HST Accounting Periods --> FE08
    FR01 -- GST/HST NETFILE confirmation --> FR08R
    FE08 -- Notification of GST/HST Accounting Periods review --> FE08R["FE-08r"]

    RT001A@{ shape: hex}
    RT001B@{ shape: hex}
    RT001C@{ shape: hex}
    VR01A@{ shape: hex}
    VR01B@{ shape: hex}
    VR01C@{ shape: hex}
    A@{ shape: rounded}
    WEL@{ shape: rect}
    MBA08@{ shape: rect}
    RT001@{ shape: rect}
    RTTAB1@{ shape: card}
    RTTAB2@{ shape: card}
    FR00@{ shape: rounded}
    VR01@{ shape: rounded}
    AR01@{ shape: rounded}
    SP01@{ shape: rounded}
    VE01@{ shape: rounded}
    AR08@{ shape: rounded}
    AR08R@{ shape: rounded}
    AR09@{ shape: rounded}
    FR01@{ shape: rect}
    FR08@{ shape: rounded}
    FR08R@{ shape: rounded}
    FR09@{ shape: rounded}
    FE01@{ shape: rounded}
    FE08@{ shape: rounded}
    FE10@{ shape: rounded}
    FE11@{ shape: rounded}
    FE08R@{ shape: rounded}
    click VR01A "https://cra-design.github.io/cra-portal/crrnt/gst-hst/view-expected-filed-returns/b-rt-vr-01_eng.html"
    click VR01B "https://cra-design.github.io/cra-portal/crrnt/gst-hst/view-expected-filed-returns/b-rt-vr-01-02_eng.html"
    click VR01C "https://cra-design.github.io/cra-portal/crrnt/gst-hst/view-expected-filed-returns/b-rt-vr-01-03_eng.html"
    click A "https://cra-design.github.io/gst-hst-business/en/topics/gst-hst-businesses/file-return/how-file/how-file-cra-account.html"
    click B "https://cra-design.github.io/cra-portal/index.html"
    click FR00 "https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-return/b-rt-fr-00_eng.html"
    click AR01 "https://cra-design.github.io/cra-portal/crrnt/gst-hst/adjust-return/b-rt-ar-01_eng.html"
    click SP01 "https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-election/b-rt-sp-01_eng.html"
    click VE01 "https://cra-design.github.io/cra-portal/crrnt/gst-hst/view-elections/b-rt-ve-01_eng.html"
    click AR08 "https://cra-design.github.io/cra-portal/crrnt/gst-hst/adjust-return/b-rt-ar-08_eng.html"
    click AR08R "https://cra-design.github.io/cra-portal/crrnt/gst-hst/adjust-return/b-rt-ar-08r_eng.html"
    click AR09 "https://cra-design.github.io/cra-portal/crrnt/gst-hst/adjust-return/b-rt-ar-09_eng.html"
    click FR08 "https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-return/b-rt-fr-08_eng.html"
    click FR08R "https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-return/b-rt-fr-08R_eng.html"
    click FR09 "https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-return/b-rt-fr-09_eng.html"
    click FE01 "https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-election/b-rt-fe-01_eng.html"
    click FE08 "https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-election/b-rt-fe-08_eng.html"
    click FE08R "https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-election/b-rt-fe-08r_eng.html"
    click FE10 "https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-election/b-rt-fe-10_eng.html"
    click FE11 "https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-election/b-rt-fe-11_eng.html"

```

## MYBA links

adjust-return

- https://cra-design.github.io/cra-portal/crrnt/gst-hst/adjust-return/b-rt-ar-01_eng.html
- https://cra-design.github.io/cra-portal/crrnt/gst-hst/adjust-return/b-rt-ar-08_eng.html
- https://cra-design.github.io/cra-portal/crrnt/gst-hst/adjust-return/b-rt-ar-08r_eng.html
- https://cra-design.github.io/cra-portal/crrnt/gst-hst/adjust-return/b-rt-ar-09_eng.html

calculate-instalment-payments

- https://cra-design.github.io/cra-portal/crrnt/gst-hst/calculate-instalment-payments/b-rt-ipc-01_eng.html

file-election

- https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-election/b-rt-fe-01_eng.html
- https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-election/b-rt-fe-08_eng.html
- https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-election/b-rt-fe-08r_eng.html
- https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-election/b-rt-fe-10_eng.html
- https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-election/b-rt-fe-11_eng.html
- https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-election/b-rt-sp-01_eng.html

file-return

- https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-return/b-rt-fr-00_eng.html
- https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-return/b-rt-fr-08_eng.html
- https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-return/b-rt-fr-08r_eng.html
- https://cra-design.github.io/cra-portal/crrnt/gst-hst/file-return/b-rt-fr-09_eng.html

view-elections

- https://cra-design.github.io/cra-portal/crrnt/gst-hst/view-elections/b-rt-ve-01_eng.html

view-expected-filed-returns

- https://cra-design.github.io/cra-portal/crrnt/gst-hst/view-expected-filed-returns/b-rt-vr-01_eng.html
- https://cra-design.github.io/cra-portal/crrnt/gst-hst/view-expected-filed-returns/b-rt-vr-02_eng.html

Help files

- https://cra-design.github.io/cra-portal/help/gst-hst-electronic-filing.html
- https://cra-design.github.io/cra-portal/help/electronic-rebate-forms.html
- https://cra-design.github.io/cra-portal/help/payments-cra.html
- https://cra-design.github.io/cra-portal/help/adjust-a-return.html
- https://cra-design.github.io/cra-portal/help/file-election.html
- https://cra-design.github.io/cra-portal/help/view-expected-filed-returns.html
