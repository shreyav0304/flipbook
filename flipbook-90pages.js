// "From Strangers to Family" — 92-Page Black & White Stickman College Flipbook
// Time must stretch. Small shifts. Flipping addictive through slow, quiet moments.

class FlipbookRenderer {
    constructor() {
        console.log('🎬 FlipbookRenderer initializing...');
        this.canvases = document.querySelectorAll('.flipbook-canvas');
        console.log(`✓ Found ${this.canvases.length} canvases`);
        
        if (this.canvases.length === 0) {
            console.error('NO CANVASES FOUND');
            return;
        }
        
        this.initializeAllPages();
    }

    initializeAllPages() {
        console.log('Starting to draw all pages...');
        let drawn = 0;
        
        this.canvases.forEach((canvas, index) => {
            try {
                const pageNum = parseInt(canvas.id.replace('page-', ''));
                this.drawPage(canvas, pageNum);
                drawn++;
            } catch (error) {
                console.error(`Error drawing page ${canvas.id}:`, error);
            }
        });
        
        console.log(`✓ Successfully drew ${drawn} pages`);
    }

    drawPage(canvas, pageNum) {
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            console.error(`No context for page ${pageNum}`);
            return;
        }

        // White background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 600, 600);

        // Set default drawing style
        ctx.strokeStyle = '#000000';
        ctx.fillStyle = '#ffffff';
        ctx.lineWidth = 2;

        // Cover page
        if (pageNum === 0) {
            this.drawCoverPage(ctx);
        }
        // ACT I — ARRIVAL (Pages 1-16)
        else if (pageNum <= 16) {
            this.drawActOne(ctx, pageNum);
            if (pageNum === 1) {
                this.drawTitleBox(ctx, 'ACT I — ARRIVAL');
            }
        }
        // ACT II — FIRST CONNECTIONS (Pages 17-32)
        else if (pageNum <= 32) {
            this.drawActTwo(ctx, pageNum - 16);
            if (pageNum === 17) {
                this.drawTitleBox(ctx, 'ACT II — FIRST\nCONNECTIONS');
            }
        }
        // ACT III — EVERYDAY MAGIC (Pages 33-50)
        else if (pageNum <= 50) {
            this.drawActThree(ctx, pageNum - 32);
            if (pageNum === 33) {
                this.drawTitleBox(ctx, 'ACT III — EVERYDAY\nMAGIC');
            }
        }
        // ACT IV — STRUGGLE & SUPPORT (Pages 51-68)
        else if (pageNum <= 68) {
            this.drawActFour(ctx, pageNum - 50);
            if (pageNum === 51) {
                this.drawTitleBox(ctx, 'ACT IV — STRUGGLE\n& SUPPORT');
            }
        }
        // ACT V — TIME PASSES (Pages 69-80)
        else if (pageNum <= 80) {
            this.drawActFive(ctx, pageNum - 68);
            if (pageNum === 69) {
                this.drawTitleBox(ctx, 'ACT V — TIME PASSES');
            }
        }
        // ACT VI — GOODBYE (Pages 81-90)
        else if (pageNum <= 90) {
            this.drawActSix(ctx, pageNum - 80);
            if (pageNum === 81) {
                this.drawTitleBox(ctx, 'ACT VI — GOODBYE');
            }
        }
        // FINAL MOMENT (Pages 91-92)
        else if (pageNum === 91) {
            this.drawFinalWalkAway(ctx);
        } else if (pageNum === 92) {
            this.drawLastPage(ctx);
            return; // drawLastPage handles its own page number
        }
        
        // Draw page number at bottom (on ALL pages)
        this.drawPageNumber(ctx, pageNum);
    }

    // ============ COVER PAGE ============
    drawCoverPage(ctx) {
        ctx.fillStyle = '#000';
        ctx.font = 'bold 48px Georgia, serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.fillText('From', 300, 200);
        ctx.fillText('Strangers', 300, 260);
        ctx.fillText('to Family', 300, 320);

        ctx.font = 'italic 20px Georgia, serif';
        ctx.fillStyle = '#333';
        ctx.fillText('A College Journey in Black & White', 300, 420);

        // Small bird
        this.drawBird(ctx, 500, 100);
    }

    // ============ TITLE BOX (OVERLAYS SCENE, TOP 15%) ============
    drawTitleBox(ctx, text) {
        // Small box at TOP - overlays the scene (top 15% = ~90px of 600px canvas)
        const boxX = 100;
        const boxY = 20;
        const boxW = 400;
        const boxH = 70;

        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000000';

        // Thin hand-drawn rectangular box (slightly uneven for hand-drawn feel)
        ctx.beginPath();
        ctx.moveTo(boxX, boxY + 2);
        ctx.lineTo(boxX + boxW - 2, boxY);
        ctx.lineTo(boxX + boxW + 1, boxY + boxH - 2);
        ctx.lineTo(boxX + 2, boxY + boxH + 1);
        ctx.closePath();
        ctx.stroke();

        // Handwritten-style text inside box
        ctx.fillStyle = '#000000';
        ctx.font = 'italic 18px Georgia, serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const lines = text.split('\n');
        const lineHeight = 22;
        const startY = boxY + boxH / 2 - (lines.length - 1) * lineHeight / 2;

        lines.forEach((line, i) => {
            ctx.fillText(line, boxX + boxW / 2, startY + i * lineHeight);
        });
    }

    // ============ PAGE NUMBER BOX (BOTTOM) ============
    drawPageNumber(ctx, pageNum) {
        // Skip for cover page
        if (pageNum === 0) return;

        const boxX = 270;
        const boxY = 550;
        const boxW = 60;
        const boxH = 35;

        // Small hand-drawn box
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000';
        ctx.beginPath();
        ctx.moveTo(boxX, boxY);
        ctx.lineTo(boxX + boxW, boxY + 1);
        ctx.lineTo(boxX + boxW + 1, boxY + boxH);
        ctx.lineTo(boxX + 1, boxY + boxH - 1);
        ctx.closePath();
        ctx.stroke();

        // Page number text
        ctx.font = '18px Arial';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(pageNum.toString(), boxX + boxW / 2, boxY + boxH / 2 + 3);
    }

    // ============ ACT 1: ARRIVAL (Pages 1-16) ============
    // Mood: Quiet • Nervous • Hopeful
    drawActOne(ctx, page) {
        const groundY = 520;

        // 🕊️ Hidden detail: Tiny bird watching on every page
        this.drawBird(ctx, 480 + Math.sin(page * 0.4) * 25, 90 + Math.cos(page * 0.4) * 15);

        if (page <= 4) {
            // Pages 1-4: Campus gate appears far, grows closer VERY slowly
            const distance = 5 - page;
            const gateX = 300;
            const gateY = 180 + distance * 40;
            const gateW = 60 + (4 - distance) * 25;
            const stickmanX = 300 + distance * 70;

            this.drawGate(ctx, gateX, gateY, gateW);
            this.drawStickmanHunched(ctx, stickmanX, groundY - 80);
        } 
        else if (page === 5) {
            // Page 5: Pause before entering
            this.drawGate(ctx, 300, 180, 140);
            this.drawStickmanHunched(ctx, 220, groundY - 80);
        }
        else if (page <= 7) {
            // Pages 6-7: Backpack strap adjusted slowly
            const adjust = (page - 5) * 0.4;
            this.drawStickmanHunched(ctx, 300, groundY - 80);
            this.drawBackpackWithStrap(ctx, 285, groundY - 80, adjust);
        } 
        else if (page === 8) {
            // Page 8: Deep breath (shown through expanded chest/posture)
            ctx.lineWidth = 1;
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.arc(280, 300, 30 + i * 15, 0, Math.PI * 2);
                ctx.stroke();
            }
            this.drawStickman(ctx, 300, groundY - 80);
        }
        else if (page <= 10) {
            // Pages 9-10: One foot moving forward SLOWLY
            const stepPhase = (page - 8) * 15;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(280, groundY);
            ctx.lineTo(280 + stepPhase, groundY + 12);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(100, groundY);
            ctx.lineTo(500, groundY);
            ctx.stroke();
            
            this.drawStickman(ctx, 300, groundY - 80);
        } 
        else if (page <= 13) {
            // Pages 11-13: Empty classroom, same bench different angles
            ctx.lineWidth = 2;
            ctx.strokeRect(80, 150, 440, 300);

            const benchAngle = (page - 10);
            const benchX = 180 + benchAngle * 30;
            this.drawBench(ctx, benchX, groundY - 50);
            
            // Sitting alone
            this.drawSittingStickman(ctx, benchX + 60, groundY - 20);
        } 
        else if (page <= 15) {
            // Pages 14-15: Silence stretches (empty classroom, stillness)
            ctx.lineWidth = 2;
            ctx.strokeRect(80, 150, 440, 300);
            this.drawBench(ctx, 200, groundY - 50);
            this.drawSittingStickman(ctx, 260, groundY - 20);
            
            // Show passing time through subtle light shift
            ctx.globalAlpha = 0.1 * (page - 13);
            ctx.fillStyle = '#000';
            ctx.fillRect(500, 150, 50, 200);
            ctx.globalAlpha = 1;
        }
        else {
            // Page 16: Another stickman appears far away, barely noticeable
            ctx.lineWidth = 2;
            ctx.strokeRect(80, 150, 440, 300);
            this.drawBench(ctx, 200, groundY - 50);
            this.drawSittingStickman(ctx, 260, groundY - 20);
            
            // Distant figure
            this.drawStickman(ctx, 480, groundY - 80, 0.5);
        }
    }

    // ============ ACT 2: FIRST CONNECTIONS (Pages 17-32) ============
    // Mood: Awkward • Gentle • New warmth
    drawActTwo(ctx, page) {
        const groundY = 520;

        // 📓 Hidden detail: Shared notebook symbol grows more frequent
        if (page % 3 === 0) {
            ctx.lineWidth = 1;
            ctx.strokeRect(520, 100, 60, 80);
            ctx.beginPath();
            ctx.moveTo(530, 110);
            ctx.lineTo(570, 110);
            ctx.stroke();
        }

        if (page <= 5) {
            // Pages 1-5: Two stickmen share bench with distance
            const distance = Math.max(0, 6 - page) * 45;

            this.drawBench(ctx, 150, groundY - 50);
            this.drawSittingStickman(ctx, 200, groundY - 20);
            this.drawSittingStickman(ctx, 350 + distance, groundY - 20);
        } 
        else if (page <= 10) {
            // Pages 6-10: Distance reduces SLOWLY (5 pages!)
            const shrink = (page - 5) * 15;

            this.drawBench(ctx, 150, groundY - 50);
            this.drawSittingStickman(ctx, 200, groundY - 20);
            this.drawSittingStickman(ctx, 395 - shrink, groundY - 20);
        } 
        else if (page <= 14) {
            // Pages 11-14: Notebook slides closer page by page
            const slideX = (page - 10) * 20;

            this.drawBench(ctx, 150, groundY - 50);
            ctx.lineWidth = 2;
            ctx.strokeRect(220 + slideX, 280, 80, 60);

            this.drawSittingStickman(ctx, 200, groundY - 20);
            this.drawSittingStickman(ctx, 340, groundY - 20);
        } 
        else if (page === 15) {
            // Page 15: A pen is shared (frozen moment)
            this.drawBench(ctx, 150, groundY - 50);
            
            // Pen in mid-air
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(270, 260);
            ctx.lineTo(280, 290);
            ctx.stroke();
            
            this.drawSittingStickman(ctx, 200, groundY - 20);
            this.drawSittingStickman(ctx, 340, groundY - 20);
        }
        else if (page === 16) {
            // Page 16: Shoes touch accidentally
            this.drawBench(ctx, 150, groundY - 50);
            this.drawSittingStickman(ctx, 220, groundY - 20);
            this.drawSittingStickman(ctx, 320, groundY - 20);
            
            // Shoe detail
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(230, groundY + 20);
            ctx.lineTo(250, groundY + 25);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(310, groundY + 20);
            ctx.lineTo(290, groundY + 25);
            ctx.stroke();
        }
        else {
            // Pages 17-32: First laughter (posture only, stretched)
            const laughProgress = Math.min((page - 16) / 10, 1);
            
            this.drawBench(ctx, 150, groundY - 50);
            this.drawLaughingStickman(ctx, 220, groundY - 20);
            this.drawLaughingStickman(ctx, 340, groundY - 20);
            
            // Library desk appears later
            if (page > 20) {
                ctx.lineWidth = 2;
                ctx.strokeRect(190, 300, 220, 80);
            }
        }
    }

    // ============ ACT 3: EVERYDAY MAGIC (Pages 33-50) ============
    // Mood: Comfort • Belonging • Joy
    drawActThree(ctx, page) {
        const groundY = 520;

        // 👣 Hidden detail: Footprints appear during rain, fade after
        if (page >= 13 && page <= 16) {
            this.drawFootprints(ctx, 200, groundY - 10, page % 2 === 0 ? 1 : -1);
            this.drawFootprints(ctx, 260, groundY - 30, page % 2 === 0 ? -1 : 1);
        }

        if (page <= 7) {
            // Pages 1-7: Canteen table, slowly fills
            const itemCount = Math.ceil(page / 2);

            this.drawCanteenTable(ctx, 200, 350);

            // Plates appear slowly
            for (let i = 0; i < itemCount; i++) {
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(260 + i * 60, 330, 25, 0, Math.PI * 2);
                ctx.stroke();
            }

            this.drawSittingStickman(ctx, 220, groundY - 20);
            this.drawSittingStickman(ctx, 360, groundY - 20);
        } 
        else if (page <= 10) {
            // Pages 8-10: Selfie arm extends SLOWLY (3 pages)
            const armExtend = (page - 7) * 15;

            this.drawStickman(ctx, 250, groundY);
            this.drawStickman(ctx, 350, groundY);
            this.drawSelfieArm(ctx, 300, 260 - armExtend);
        } 
        else if (page <= 13) {
            // Pages 11-13: Fest posters appearing
            const posterCount = page - 10;

            for (let i = 0; i < posterCount; i++) {
                ctx.lineWidth = 2;
                ctx.strokeRect(100 + i * 150, 200, 100, 140);
            }

            this.drawStickman(ctx, 250, groundY);
            this.drawStickman(ctx, 350, groundY);
        }
        else if (page <= 16) {
            // Pages 14-16: Rain appears, they run together
            this.drawRain(ctx);

            const runPhase = (page - 13) * 30;
            this.drawRunningStickman(ctx, 200 + runPhase, groundY);
            this.drawRunningStickman(ctx, 280 + runPhase, groundY);
        }
        else {
            // Pages 17-18: Stage lights moment
            ctx.lineWidth = 3;
            for (let i = 0; i < 4; i++) {
                ctx.beginPath();
                ctx.moveTo(150 + i * 100, 50);
                ctx.lineTo(150 + i * 100 - 50, 200);
                ctx.lineTo(150 + i * 100 + 50, 200);
                ctx.closePath();
                ctx.stroke();
            }

            this.drawStickman(ctx, 280, groundY);
            this.drawStickman(ctx, 350, groundY);
        }
    }

    // ============ ACT 4: STRUGGLE & SUPPORT (Pages 51-68) ============
    // Mood: Pressure • Tiredness • Togetherness
    drawActFour(ctx, page) {
        const groundY = 520;

        // 🔨 Hidden detail: Wall crack appearing during stress, disappearing after
        if (page >= 5 && page <= 12) {
            const crackPhase = page - 5;
            const crackLength = Math.min(crackPhase * 15, 120);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(520, 180);
            ctx.lineTo(520 - crackLength * 0.5, 180 + crackLength);
            ctx.stroke();
        }

        if (page <= 6) {
            // Pages 1-6: Late night study, clock moves SLOWLY
            this.drawStudyDesk(ctx, 250, 320);

            const hour = 22 + Math.floor(page * 0.5);
            this.drawClock(ctx, 480, 160, hour);

            this.drawStickman(ctx, 280, groundY);
            this.drawStickman(ctx, 380, groundY);
        }
        else if (page <= 10) {
            // Pages 7-10: Coffee multiplies (one every page)
            this.drawStudyDesk(ctx, 250, 320);

            for (let i = 0; i < (page - 6); i++) {
                this.drawCoffee(ctx, 180 + i * 50, 290);
            }

            this.drawStressedStickman(ctx, 280, groundY);
            this.drawStressedStickman(ctx, 380, groundY);
        }
        else if (page <= 14) {
            // Pages 11-14: Exam tension building
            ctx.lineWidth = 2;
            ctx.strokeRect(200, 300, 80, 100);
            ctx.strokeRect(320, 300, 80, 100);

            this.drawStressedStickman(ctx, 240, groundY);
            this.drawStressedStickman(ctx, 360, groundY);
        }
        else {
            // Pages 15-18: Silence together (relief comes)
            this.drawBench(ctx, 200, groundY - 50);
            this.drawSittingStickman(ctx, 260, groundY - 20);
            this.drawSittingStickman(ctx, 340, groundY - 20);
        }
    }

    // ============ ACT 5: TIME PASSES (Pages 69-80) ============
    // Mood: Confidence • Growth • Pride
    drawActFive(ctx, page) {
        const groundY = 520;

        // 🌑 Hidden detail: Shadows align more closely each page
        const shadowOffset = Math.max(0, 60 - page * 4);
        ctx.fillStyle = 'rgba(0,0,0,0.1)';
        ctx.fillRect(240, groundY + 10, 40, 5);
        ctx.fillRect(240 + shadowOffset, groundY + 10, 40, 5);
        ctx.fillStyle = '#000';

        if (page <= 4) {
            // Pages 1-4: Gate now smaller (growth symbol)
            const shrinkFactor = 1 - (page * 0.05);
            this.drawGate(ctx, 300, 220, 120 * shrinkFactor);

            this.drawConfidentStickman(ctx, 280, groundY);
            this.drawConfidentStickman(ctx, 340, groundY);
        }
        else if (page <= 8) {
            // Pages 5-8: Upright walks, in sync
            const syncPhase = (page - 4) * 20;

            this.drawConfidentStickman(ctx, 250 + syncPhase, groundY);
            this.drawConfidentStickman(ctx, 310 + syncPhase, groundY);
        }
        else {
            // Pages 9-12: Closer together, bird alongside
            const closeness = Math.max(50, 90 - (page - 8) * 10);

            this.drawStickman(ctx, 280, groundY);
            this.drawStickman(ctx, 280 + closeness, groundY);

            this.drawBird(ctx, 450 + page * 5, 120 + Math.sin(page * 0.5) * 20);
        }
    }

    // ============ ACT 6: GOODBYE (Pages 81-90) ============
    // Mood: Gratitude • Farewell • Everything Unsaid
    drawActSix(ctx, page) {
        const groundY = 520;

        // 🌑 Hidden detail: Shadows fully overlap (no separation)
        ctx.fillStyle = 'rgba(0,0,0,0.15)';
        ctx.fillRect(280, groundY + 10, 60, 5);
        ctx.fillStyle = '#000';

        if (page <= 4) {
            // Pages 1-4: Gowns appear gradually
            const gownAlpha = Math.min(page * 0.25, 1);

            ctx.globalAlpha = gownAlpha;
            this.drawGownStickman(ctx, 280, groundY);
            this.drawGownStickman(ctx, 350, groundY);
            ctx.globalAlpha = 1.0;
        }
        else if (page <= 6) {
            // Pages 5-6: Caps held (2-page moment)
            this.drawGownStickman(ctx, 280, groundY);
            this.drawGownStickman(ctx, 350, groundY);

            this.drawCap(ctx, 260, 180);
            this.drawCap(ctx, 370, 180);
        }
        else if (page <= 9) {
            // Pages 7-9: Group hug stretched (tightening 10px per page)
            const hugRadius = 90 - (page - 6) * 10;

            this.drawGownStickman(ctx, 300 - hugRadius, groundY);
            this.drawGownStickman(ctx, 300 + hugRadius, groundY);
        }
        else {
            // Page 10: Cap throw (5-frame sequence across 1 page)
            this.drawGownStickman(ctx, 280, groundY);
            this.drawGownStickman(ctx, 350, groundY);

            for (let i = 0; i < 5; i++) {
                const capY = 200 - i * 40;
                const capX = 300 + (i - 2) * 30;
                this.drawCap(ctx, capX, capY);
            }
        }
    }

    // ============ FINAL MOMENT (Pages 91-92) ============
    drawFinalWalkAway(ctx) {
        const groundY = 520;

        // Long overlapping shadows
        ctx.globalAlpha = 0.2;
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.ellipse(220, 560, 100, 35, -0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(300, 570, 110, 30, 0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(380, 560, 95, 32, 0.25, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        // Walking away (from behind)
        ctx.lineWidth = 2;
        this.drawBackFromBehind(ctx, 200, groundY - 80);
        this.drawBackFromBehind(ctx, 300, groundY - 75);
        this.drawBackFromBehind(ctx, 400, groundY - 80);

        // Empty space ahead - fading perspective
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#e0e0e0';
        for (let i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.moveTo(150 + i * 100, 200);
            ctx.lineTo(150 + i * 100, 450);
            ctx.stroke();
        }
        ctx.strokeStyle = '#000000';
    }

    drawLastPage(ctx) {
        // Handwritten-style final message
        ctx.fillStyle = '#000';
        ctx.font = 'italic 32px Georgia, serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.fillText('From strangers', 300, 220);
        ctx.fillText('to family.', 300, 270);

        ctx.font = 'italic 26px Georgia, serif';
        ctx.fillStyle = '#333';
        ctx.fillText('Every ending is', 300, 370);
        ctx.fillText('a new beginning.', 300, 410);

        // Small bird flying off
        ctx.fillStyle = '#000';
        this.drawBird(ctx, 480, 100);

        // Page number in hand-drawn box at bottom
        const boxX = 270;
        const boxY = 530;
        const boxW = 60;
        const boxH = 35;

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000';
        ctx.beginPath();
        ctx.moveTo(boxX, boxY);
        ctx.lineTo(boxX + boxW, boxY + 2);
        ctx.lineTo(boxX + boxW - 1, boxY + boxH);
        ctx.lineTo(boxX + 1, boxY + boxH - 1);
        ctx.closePath();
        ctx.stroke();

        ctx.font = '18px Arial';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.fillText('92', boxX + boxW / 2, boxY + boxH / 2 + 5);
    }

    // ============ HELPER DRAWING FUNCTIONS ============

    drawGate(ctx, x, y, w) {
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x - w / 2, y);
        ctx.lineTo(x - w / 2, y + 200);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + w / 2, y);
        ctx.lineTo(x + w / 2, y + 200);
        ctx.stroke();

        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, w / 2, 0, Math.PI);
        ctx.stroke();
    }

    drawStickman(ctx, x, y, scale = 1) {
        const s = scale;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(x, y - 45 * s, 12 * s, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y - 30 * s);
        ctx.lineTo(x, y + 20 * s);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x - 25 * s, y - 10 * s);
        ctx.lineTo(x + 25 * s, y - 10 * s);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y + 20 * s);
        ctx.lineTo(x - 12 * s, y + 50 * s);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y + 20 * s);
        ctx.lineTo(x + 12 * s, y + 50 * s);
        ctx.stroke();
    }

    drawSittingStickman(ctx, x, y) {
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(x, y - 45, 12, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y - 30);
        ctx.lineTo(x, y + 5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x - 22, y - 10);
        ctx.lineTo(x + 22, y - 10);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y + 5);
        ctx.lineTo(x - 15, y + 30);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y + 5);
        ctx.lineTo(x + 15, y + 30);
        ctx.stroke();
    }

    drawConfidentStickman(ctx, x, y) {
        ctx.lineWidth = 2;

        // Head higher
        ctx.beginPath();
        ctx.arc(x, y - 50, 12, 0, Math.PI * 2);
        ctx.stroke();

        // Straight body
        ctx.beginPath();
        ctx.moveTo(x, y - 35);
        ctx.lineTo(x, y + 15);
        ctx.stroke();

        // Arms back (confident posture)
        ctx.beginPath();
        ctx.moveTo(x - 8, y - 15);
        ctx.lineTo(x - 28, y + 5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + 8, y - 15);
        ctx.lineTo(x + 28, y + 5);
        ctx.stroke();

        // Legs
        ctx.beginPath();
        ctx.moveTo(x, y + 15);
        ctx.lineTo(x - 15, y + 50);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y + 15);
        ctx.lineTo(x + 15, y + 50);
        ctx.stroke();
    }

    drawStickmanHunched(ctx, x, y) {
        // Nervous posture: hunched shoulders
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(x, y - 40, 12, 0, Math.PI * 2);
        ctx.stroke();

        // Bent body (hunched)
        ctx.beginPath();
        ctx.moveTo(x, y - 25);
        ctx.lineTo(x + 5, y + 25);
        ctx.stroke();

        // Arms in (nervous)
        ctx.beginPath();
        ctx.moveTo(x - 10, y - 5);
        ctx.lineTo(x - 20, y + 15);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + 10, y - 5);
        ctx.lineTo(x + 20, y + 15);
        ctx.stroke();

        // Legs
        ctx.beginPath();
        ctx.moveTo(x + 5, y + 25);
        ctx.lineTo(x - 10, y + 55);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + 5, y + 25);
        ctx.lineTo(x + 15, y + 55);
        ctx.stroke();
    }

    drawStressedStickman(ctx, x, y) {
        this.drawStickman(ctx, x, y);

        // Stress marks
        ctx.font = '24px Arial';
        ctx.fillStyle = '#000';
        ctx.fillText('!', x + 25, y - 60);
    }

    drawLaughingStickman(ctx, x, y) {
        this.drawSittingStickman(ctx, x, y);

        // Laughter arc
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y - 50, 8, 0, Math.PI);
        ctx.stroke();
    }

    drawRunningStickman(ctx, x, y) {
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(x, y - 45, 12, 0, Math.PI * 2);
        ctx.stroke();

        // Tilted body
        ctx.beginPath();
        ctx.moveTo(x + 5, y - 30);
        ctx.lineTo(x, y + 20);
        ctx.stroke();

        // Arms swinging
        ctx.beginPath();
        ctx.moveTo(x - 15, y - 15);
        ctx.lineTo(x - 30, y - 30);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + 15, y - 15);
        ctx.lineTo(x + 30, y);
        ctx.stroke();

        // Legs running
        ctx.beginPath();
        ctx.moveTo(x, y + 20);
        ctx.lineTo(x - 12, y + 50);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y + 20);
        ctx.lineTo(x + 10, y + 55);
        ctx.stroke();
    }

    drawBackFromBehind(ctx, x, y) {
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(x, y - 50, 12, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y - 35);
        ctx.lineTo(x, y + 20);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x - 12, y - 12);
        ctx.lineTo(x - 25, y + 5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + 12, y - 12);
        ctx.lineTo(x + 25, y + 5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x - 8, y + 20);
        ctx.lineTo(x - 15, y + 50);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + 8, y + 20);
        ctx.lineTo(x + 15, y + 50);
        ctx.stroke();
    }

    drawGownStickman(ctx, x, y, progress = 1) {
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(x, y - 50, 12, 0, Math.PI * 2);
        ctx.stroke();

        // Gown
        const gownW = 70 * progress;
        ctx.beginPath();
        ctx.moveTo(x - gownW / 2, y - 35);
        ctx.lineTo(x + gownW / 2, y - 35);
        ctx.lineTo(x + gownW / 2, y + 40);
        ctx.lineTo(x - gownW / 2, y + 40);
        ctx.closePath();
        ctx.stroke();

        // Cap
        if (progress > 0.7) {
            this.drawCap(ctx, x, y - 60, 1);
        }
    }

    drawBench(ctx, x, y) {
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 150, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + 20, y + 10);
        ctx.lineTo(x + 20, y + 30);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + 130, y + 10);
        ctx.lineTo(x + 130, y + 30);
        ctx.stroke();
    }

    drawCanteenTable(ctx, x, y) {
        ctx.lineWidth = 2;
        ctx.strokeRect(x - 120, y, 240, 60);
    }

    drawStudyDesk(ctx, x, y) {
        ctx.lineWidth = 2;
        ctx.strokeRect(x - 100, y, 200, 50);
    }

    drawBackpackWithStrap(ctx, x, y, tightness) {
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y - 20, 30, 50);

        // Strap
        ctx.lineWidth = 1 + tightness;
        ctx.beginPath();
        ctx.moveTo(x + 8, y - 20);
        ctx.lineTo(x - 10, y - 30 - tightness * 10);
        ctx.stroke();
    }

    drawSelfieArm(ctx, x, y, length) {
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x - 20, y);
        ctx.quadraticCurveTo(x - 20 - length / 2, y - 30, x - 20 - length, y + 20);
        ctx.stroke();

        // Phone
        if (length > 20) {
            ctx.strokeRect(x - 40 - length, y + 10, 25, 35);
        }
    }

    drawRain(ctx, intensity) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#666666';

        for (let i = 0; i < 25; i++) {
            const x = (i * 70 + intensity) % 600;
            const y = 150 + (i % 4) * 120;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x - 12, y + 25);
            ctx.stroke();
        }

        ctx.strokeStyle = '#000000';
    }

    drawClock(ctx, x, y, hour) {
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.stroke();

        const angle = (hour % 12) * Math.PI / 6;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 15 * Math.sin(angle), y - 15 * Math.cos(angle));
        ctx.stroke();
    }

    drawCoffee(ctx, x, y) {
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x - 12, y - 15);
        ctx.lineTo(x - 10, y + 18);
        ctx.lineTo(x + 10, y + 18);
        ctx.lineTo(x + 12, y - 15);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x + 18, y + 3, 8, -Math.PI / 2, Math.PI / 2);
        ctx.stroke();
    }

    drawExamDesks(ctx) {
        ctx.lineWidth = 2;
        for (let i = 0; i < 3; i++) {
            ctx.strokeRect(80 + i * 160, 300, 130, 100);
        }
    }

    drawFootprints(ctx, groundY) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#cccccc';

        for (let i = 0; i < 4; i++) {
            const x = 150 + i * 80;
            // Footprint shape
            ctx.beginPath();
            ctx.ellipse(x, groundY + 10, 8, 12, 0.3, 0, Math.PI * 2);
            ctx.stroke();
        }

        ctx.strokeStyle = '#000000';
    }

    drawScratchedHeart(ctx, x, y) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x - 5, y - 5, 5, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x + 5, y - 5, 5, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y + 10);
        ctx.lineTo(x - 10, y - 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y + 10);
        ctx.lineTo(x + 10, y - 2);
        ctx.stroke();
    }

    drawCap(ctx, x, y, scale = 1) {
        ctx.lineWidth = 2;
        ctx.fillStyle = '#000';

        const w = 25 * scale;
        const h = 18 * scale;

        ctx.beginPath();
        ctx.moveTo(x - w, y);
        ctx.lineTo(x, y - h);
        ctx.lineTo(x + w, y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Brim
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x - w - 8, y);
        ctx.lineTo(x + w + 8, y);
        ctx.stroke();
    }

    drawBird(ctx, x, y) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(x - 4, y);
        ctx.lineTo(x - 12, y - 4);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + 4, y);
        ctx.lineTo(x + 12, y - 4);
        ctx.stroke();
    }
}

// Initialize
console.log('🎬 Script loaded. Waiting for DOM...');
setTimeout(() => {
    console.log('🚀 Initializing FlipbookRenderer...');
    new FlipbookRenderer();
    console.log('✓ Done!');
}, 100);

