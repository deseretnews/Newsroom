<?php

$years = [
    "2018",
    "2017",
    "2016",
    "2015",
    "2014"
];

$sections = [];

foreach ($years as $key => $year) {
    $yearData = [
        'title' => $year,
        'items' => [
            'Passed' => [],
            'Didn\'t pass' => []
        ]
    ];
    $row = 1;
    if (($handle = fopen($year.".csv", "r")) !== false) {
        while (($data = fgetcsv($handle, 1000, ",")) !== false) {
            // Skip the header row
            if ($row !== 1) {
                $sponsors = explode("\n", $data[2]);
                $sponsorsHtml = '';
                foreach ($sponsors as $sponsor) {
                    $sponsorsHtml .= '<p>'.trim($sponsor).'</p>';
                }

                $yearData['items'][trim($data[4])][] = [
                    'title' => '<strong>'.trim($data[0]).':</strong>&nbsp;&nbsp;'.trim($data[1]),
                    'description' => sprintf(
                        "<p class=\"legislative-summary--label\">%s</p><h3 class=\"legislative-summary--title\">%s</h3><div class=\"legislative-summary--sponsors\"><h4>Sponsored By</h4>%s</div><div class=\"legislative-summary--description\">%s</div>",
                        $data[0],
                        $data[1],
                        $sponsorsHtml,
                        $data[3]
                    )
                ];
            }
            $row++;
        }
        fclose($handle);
    }
    $sections[] = $yearData;
}

file_put_contents('data.json', json_encode($sections, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
//
//"sections": [
//        {
//            "title": "2018",
//            "items": {
//            "Passed": [
//                    {
//                        "title": "HB 38 — Fireworks restrictions",
//                        "description": "<p class=\"legislative-summary--label\">HB 38</p><h3 class=\"legislative-summary--title\">Fireworks restrictions</h3><div class=\"legislative-summary--sponsors\"><h4>Sponsored By</h4><p>Rep. James Dunnigan, R</p><p>Sen. Jani Iwamoto, D</p></div><div class=\"legislative-summary--description\">Reduces the number of days fireworks are allowed during July. Fireworks will be allowed from July 2 to July 5, and July 22 to July 25. Leaves New Year's Eve and Chinese New Year as is. Requires sellers to display the maps of where fireworks aren’t allowed. It is the jurisdiction of cities to designate restricted areas.</div>"
//                    },
//
//
