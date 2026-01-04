// Flipbook Print Edition - Premium Canvas Drawing System
class FlipbookPrintRenderer {
    constructor() {
        this.canvases = document.querySelectorAll('.flipbook-canvas');
        this.initializeAllFrames();
    }

    initializeAllFrames() {
        this.canvases.forEach(canvas => {
            const canvasId = canvas.id;
            const match = canvasId.match(/frame-(\d+)-(\d+)/);
            if (match) {
                const sceneNum = parseInt(match[1]);
                const frameNum = parseInt(match[2]);
                this.drawFrame(canvas, sceneNum, frameNum);
            }
        });
    }

    drawFrame(canvas, scene, frame) {
        const ctx = canvas.getContext('2d');
        
        // Clean white background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // Scene-specific animations with enhanced details
        switch(scene) {
            case 1: this.drawScene1Walking(ctx, frame, centerX, centerY); break;
            case 2: this.drawScene2Meeting(ctx, frame, centerX, centerY); break;
            case 3: this.drawScene3Library(ctx, frame, centerX, centerY); break;
            case 4: this.drawScene4Canteen(ctx, frame, centerX, centerY); break;
            case 5: this.drawScene5Fest(ctx, frame, centerX, centerY); break;
            case 6: this.drawScene6Rain(ctx, frame, centerX, centerY); break;
            case 7: this.drawScene7Study(ctx, frame, centerX, centerY); break;
            case 8: this.drawScene8Exam(ctx, frame, centerX, centerY); break;
            case 9: this.drawScene9Walk(ctx, frame, centerX, centerY); break;
            case 10: this.drawScene10Graduation(ctx, frame, centerX, centerY); break;
            case 11: this.drawScene11CapToss(ctx, frame, centerX, centerY); break;
            case 12: this.drawScene12Sunset(ctx, frame, centerX, centerY); break;
        }
    }

    // Scene 1: Student walking through campus entrance gate with architecture
    drawScene1Walking(ctx, frame, cx, cy) {
        // Ground
        ctx.fillStyle = '#9a8a6a';
        ctx.fillRect(30, 380, 540, 100);
        
        // Sky gradient
        const skyGrad = ctx.createLinearGradient(0, 50, 0, 350);
        skyGrad.addColorStop(0, '#87CEEB');
        skyGrad.addColorStop(1, '#E0F6FF');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(30, 50, 540, 300);

        // Gate pillars
        ctx.fillStyle = '#8B7355';
        ctx.fillRect(80, 120, 25, 260);
        ctx.fillRect(495, 120, 25, 260);
        
        // Gate top arch
        ctx.strokeStyle = '#8B7355';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(cx, 140, 100, 0, Math.PI);
        ctx.stroke();

        // Gate details
        ctx.fillStyle = '#8B7355';
        ctx.fillRect(75, 370, 450, 15);

        // Walking student with detail
        const studentX = 100 + (frame * 45);
        this.drawDetailedFigure(ctx, studentX, 320, '#333', true);
        
        // Clouds
        this.drawCloud(ctx, 150, 100);
        this.drawCloud(ctx, 400, 130);
    }

    // Scene 2: Two friends meeting with dynamic approach
    drawScene2Meeting(ctx, frame, cx, cy) {
        // Park setting
        ctx.fillStyle = '#90EE90';
        ctx.fillRect(30, 300, 540, 180);
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(30, 50, 540, 250);

        // Trees
        this.drawTree(ctx, 100, 150);
        this.drawTree(ctx, 480, 140);

        // Bench
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(200, 330, 200, 15);
        ctx.fillRect(185, 345, 10, 30);
        ctx.fillRect(405, 345, 10, 30);

        // Friend 1 walking from left
        const friend1X = 120 + (frame * 35);
        this.drawDetailedFigure(ctx, friend1X, 280, '#e74c3c', true);

        // Friend 2 walking from right
        const friend2X = 480 - (frame * 35);
        this.drawDetailedFigure(ctx, friend2X, 280, '#3498db', true);

        // Heart appears when close (frame 5+)
        if (frame >= 5) {
            for (let i = 0; i < 3; i++) {
                this.drawHeart(ctx, cx + (Math.random() - 0.5) * 60, 150 + i * 40, 12);
            }
        }
    }

    // Scene 3: Library with focused studying atmosphere
    drawScene3Library(ctx, frame, cx, cy) {
        // Background - wooden interior
        const woodGrad = ctx.createLinearGradient(0, 0, 0, 600);
        woodGrad.addColorStop(0, '#d2a679');
        woodGrad.addColorStop(1, '#a0826d');
        ctx.fillStyle = woodGrad;
        ctx.fillRect(30, 50, 540, 400);

        // Bookshelves with more detail
        ctx.strokeStyle = '#8B7355';
        ctx.lineWidth = 3;
        for (let i = 0; i < 5; i++) {
            ctx.strokeRect(70 + i * 100, 100, 80, 150);
            // Shelf dividers
            ctx.strokeRect(70 + i * 100, 140, 80, 3);
        }

        // Books on shelves - colorful
        const bookColors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
        for (let i = 0; i < 5; i++) {
            ctx.fillStyle = bookColors[i];
            ctx.fillRect(75 + i * 100, 110, 15, 25);
            ctx.fillRect(92 + i * 100, 110, 15, 25);
        }

        // Student studying at desk with changing posture
        const deskX = cx - 150;
        const headY = 300 - (Math.sin(frame / 4) * 10);
        
        // Desk
        ctx.fillStyle = '#8B6914';
        ctx.fillRect(deskX - 50, 340, 100, 20);
        ctx.fillRect(deskX - 45, 360, 10, 60);
        ctx.fillRect(deskX + 35, 360, 10, 60);

        this.drawDetailedFigure(ctx, deskX, headY, '#333', false);

        // Open book on desk
        ctx.fillStyle = '#fff';
        ctx.fillRect(deskX + 35, 320, 40, 30);
        ctx.strokeStyle = '#333';
        ctx.strokeRect(deskX + 35, 320, 40, 30);

        // Coffee cup with steam
        this.drawCoffeeCupWithSteam(ctx, cx + 80, 330, frame);
    }

    // Scene 4: Canteen with growing group
    drawScene4Canteen(ctx, frame, cx, cy) {
        // Canteen walls
        ctx.fillStyle = '#fefef0';
        ctx.fillRect(30, 50, 540, 350);

        // Table
        ctx.fillStyle = '#8B6914';
        ctx.fillRect(80, 300, 440, 25);
        ctx.fillRect(95, 325, 15, 80);
        ctx.fillRect(475, 325, 15, 80);

        // Food items on table
        this.drawFoodItems(ctx, cx);

        // Friends gathering (more appear each frame)
        const positions = [
            { x: 140, y: 230, color: '#e74c3c' },
            { x: 220, y: 220, color: '#3498db' },
            { x: 300, y: 215, color: '#2ecc71' },
            { x: 380, y: 220, color: '#f39c12' },
            { x: 460, y: 230, color: '#9b59b6' }
        ];

        for (let i = 0; i <= Math.min(frame, 4); i++) {
            this.drawDetailedFigure(ctx, positions[i].x, positions[i].y, positions[i].color, true);
        }

        // Camera/phone appears and gets closer
        if (frame >= 4) {
            this.drawCamera(ctx, cx, 150 - frame * 5);
        }

        // Speech bubbles indicating fun
        if (frame >= 3) {
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.fillRect(150, 120, 80, 50);
            ctx.fillStyle = '#333';
            ctx.font = '20px Arial';
            ctx.fillText('😂😄', 160, 150);
        }
    }

    // Scene 5: College fest - stage and festive atmosphere
    drawScene5Fest(ctx, frame, cx, cy) {
        // Night sky
        ctx.fillStyle = '#0a0e27';
        ctx.fillRect(30, 50, 540, 350);

        // Stage
        ctx.fillStyle = '#2c3e50';
        ctx.fillRect(60, 180, 480, 120);

        // Stage lights getting brighter
        const lightIntensity = Math.min(255, 100 + frame * 25);
        ctx.fillStyle = `rgba(${lightIntensity}, ${lightIntensity - 50}, 50, 0.8)`;
        for (let i = 0; i < 8; i++) {
            ctx.fillRect(90 + i * 55, 165, 40, 20);
        }

        // Crowd growing
        for (let i = 0; i < 4 + Math.min(frame, 3); i++) {
            const x = 100 + Math.random() * 400;
            const y = 310 + Math.random() * 80;
            this.drawSimpleFigure(ctx, x, y, '#FFD700');
        }

        // Confetti effect
        if (frame >= 3) {
            this.drawFestivalConfetti(ctx, frame);
        }

        // Stage performers
        this.drawStickFigure(ctx, cx - 60, 240, '#FF69B4');
        this.drawStickFigure(ctx, cx, 240, '#FF69B4');
        this.drawStickFigure(ctx, cx + 60, 240, '#FF69B4');
    }

    // Scene 6: Rainy day with running and umbrellas
    drawScene6Rain(ctx, frame, cx, cy) {
        // Rainy sky gradient
        const rainSkyGrad = ctx.createLinearGradient(0, 50, 0, 350);
        rainSkyGrad.addColorStop(0, '#4a5f7f');
        rainSkyGrad.addColorStop(1, '#7a8fa0');
        ctx.fillStyle = rainSkyGrad;
        ctx.fillRect(30, 50, 540, 300);

        // Ground
        ctx.fillStyle = '#9a9a9a';
        ctx.fillRect(30, 350, 540, 130);

        // Puddles
        ctx.fillStyle = 'rgba(100, 150, 200, 0.4)';
        ctx.beginPath();
        ctx.ellipse(150, 420, 50, 20, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(450, 430, 40, 15, 0, 0, Math.PI * 2);
        ctx.fill();

        // Heavy rain
        ctx.strokeStyle = '#5a9fd4';
        ctx.lineWidth = 2;
        for (let i = 0; i < 25; i++) {
            const startY = 80 + (frame * 25 + i * 20) % 300;
            const x = 60 + (i % 12) * 45;
            ctx.beginPath();
            ctx.moveTo(x, startY);
            ctx.lineTo(x - 8, startY + 20);
            ctx.stroke();
        }

        // Running figures with umbrellas
        for (let i = 0; i < 2; i++) {
            const x = 150 + i * 150 + (frame * 20);
            this.drawRunningFigure(ctx, x, 350, '#333');
            this.drawUmbrella(ctx, x + 10, 300 - frame * 2);
        }
    }

    // Scene 7: Late night library study with glowing ambiance
    drawScene7Study(ctx, frame, cx, cy) {
        // Dark background - night study
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(30, 50, 540, 350);

        // Desk
        ctx.fillStyle = '#8B6914';
        ctx.fillRect(150, 350, 300, 25);
        ctx.fillRect(165, 375, 12, 50);
        ctx.fillRect(438, 375, 12, 50);

        // Lamp with glowing effect
        const lampGlow = 80 + frame * 25;
        const lampGradient = ctx.createRadialGradient(cx + 100, 250, 10, cx + 100, 250, 100);
        lampGradient.addColorStop(0, `rgba(255, 220, 100, ${lampGlow / 255})`);
        lampGradient.addColorStop(1, `rgba(255, 200, 50, 0)`);
        ctx.fillStyle = lampGradient;
        ctx.beginPath();
        ctx.arc(cx + 100, 250, 100, 0, Math.PI * 2);
        ctx.fill();

        // Lamp structure
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(cx + 100, 200, 35, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = '#999';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx + 100, 235);
        ctx.lineTo(cx + 100, 300);
        ctx.stroke();

        // Student at desk focused
        this.drawDetailedFigure(ctx, cx - 120, 310, '#333', false);

        // Books and study materials
        ctx.fillStyle = '#fff';
        ctx.fillRect(cx - 160, 320, 40, 20);
        ctx.fillStyle = '#f39c12';
        ctx.fillRect(cx - 110, 330, 30, 15);

        // Coffee mug
        this.drawCoffeeCupWithSteam(ctx, cx + 80, 320, frame);
    }

    // Scene 8: Exam - from stress to relief
    drawScene8Exam(ctx, frame, cx, cy) {
        // Classroom background
        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(30, 50, 540, 350);

        // Exam desks
        ctx.fillStyle = '#D2B48C';
        for (let i = 0; i < 3; i++) {
            ctx.fillRect(80 + i * 160, 280, 130, 70);
        }

        // Students stressed initially, then relieved
        const stressLevel = Math.max(0, 7 - frame);
        
        if (frame <= 3) {
            // Stressed phase
            this.drawStressedStudent(ctx, cx - 120, 210, stressLevel);
            // Stress marks
            ctx.fillStyle = '#FF0000';
            ctx.font = '16px Arial';
            ctx.fillText('!!!', cx - 100, 160);
        } else if (frame <= 5) {
            // Relief starting
            this.drawDetailedFigure(ctx, cx - 120, 230, '#f39c12', true);
        } else {
            // Happy relief
            this.drawHappyStudent(ctx, cx - 120, 210);
            this.drawCheckMark(ctx, cx + 80, 140);
        }

        // Question papers on desks
        ctx.fillStyle = '#fff';
        for (let i = 0; i < 3; i++) {
            ctx.fillRect(95 + i * 160, 295, 100, 50);
            ctx.strokeStyle = '#999';
            ctx.strokeRect(95 + i * 160, 295, 100, 50);
        }
    }

    // Scene 9: Final year confident walk through campus
    drawScene9Walk(ctx, frame, cx, cy) {
        // Outdoor campus
        const outdoorGrad = ctx.createLinearGradient(0, 50, 0, 300);
        outdoorGrad.addColorStop(0, '#87CEEB');
        outdoorGrad.addColorStop(1, '#90EE90');
        ctx.fillStyle = outdoorGrad;
        ctx.fillRect(30, 50, 540, 250);

        ctx.fillStyle = '#8B7355';
        ctx.fillRect(30, 300, 540, 130);

        // Path
        ctx.fillStyle = 'rgba(200, 200, 200, 0.5)';
        ctx.beginPath();
        ctx.moveTo(50, 380);
        ctx.lineTo(550, 300);
        ctx.lineWidth = 30;
        ctx.strokeStyle = 'rgba(180, 180, 180, 0.4)';
        ctx.stroke();

        // Trees
        this.drawTree(ctx, 120, 120);
        this.drawTree(ctx, 350, 100);
        this.drawTree(ctx, 470, 130);

        // Walking confident figure
        const walkX = 100 + frame * 50;
        const walkY = 320 - frame * 10;
        
        this.drawConfidentWalk(ctx, walkX, walkY);

        // Confidence aura
        if (frame >= 4) {
            ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(walkX, walkY - 30, 50, 0, Math.PI * 2);
            ctx.stroke();
        }
    }

    // Scene 10: Graduation ceremony - official and celebratory
    drawScene10Graduation(ctx, frame, cx, cy) {
        // Festive background
        const ceremGrad = ctx.createLinearGradient(0, 50, 0, 300);
        ceremGrad.addColorStop(0, '#4169E1');
        ceremGrad.addColorStop(1, '#87CEEB');
        ctx.fillStyle = ceremGrad;
        ctx.fillRect(30, 50, 540, 250);

        // Stage
        ctx.fillStyle = '#8B0000';
        ctx.fillRect(40, 200, 520, 120);

        // Podium
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(cx - 40, 280, 80, 40);

        // Graduates on stage
        for (let i = 0; i <= Math.min(frame, 6); i++) {
            this.drawGraduate(ctx, 90 + i * 75, 180, frame);
        }

        // Audience
        for (let i = 0; i < 3 + frame; i++) {
            const x = 100 + Math.random() * 400;
            const y = 330 + Math.random() * 60;
            this.drawSimpleFigure(ctx, x, y, '#333');
        }

        // Celebration elements
        if (frame >= 3) {
            this.drawDiploma(ctx, cx, 100);
            ctx.fillStyle = '#FFD700';
            ctx.font = 'bold 30px Arial';
            ctx.fillText('🎓', cx + 80, 130);
        }

        // Confetti
        if (frame >= 5) {
            this.drawCeremonyConfetti(ctx, frame);
        }
    }

    // Scene 11: Cap toss celebration - iconic graduation moment
    drawScene11CapToss(ctx, frame, cx, cy) {
        // Sky
        const tossSkyGrad = ctx.createLinearGradient(0, 50, 0, 350);
        tossSkyGrad.addColorStop(0, '#FF6B9D');
        tossSkyGrad.addColorStop(0.5, '#C06C84');
        tossSkyGrad.addColorStop(1, '#6B5B95');
        ctx.fillStyle = tossSkyGrad;
        ctx.fillRect(30, 50, 540, 300);

        // Ground
        ctx.fillStyle = '#8B7355';
        ctx.fillRect(30, 350, 540, 130);

        // Group of graduates
        const gradPositions = [
            { x: 130, color: '#e74c3c' },
            { x: 200, color: '#3498db' },
            { x: 270, color: '#2ecc71' },
            { x: 340, color: '#f39c12' },
            { x: 410, color: '#9b59b6' }
        ];

        for (let pos of gradPositions) {
            this.drawGraduate(ctx, pos.x, 300, frame);
        }

        // Caps tossing up with rotation
        for (let i = 0; i < 5; i++) {
            const capStartY = 250;
            const capY = capStartY - (frame * 35);
            const capX = 130 + i * 80 + Math.sin(frame + i) * 25;
            const rotation = frame * 45 + i * 30;
            
            if (capY > 30) {
                this.drawGraduationCapFancy(ctx, capX, capY, rotation);
            }
        }

        // Celebration burst
        ctx.fillStyle = 'rgba(255, 215, 0, 0.6)';
        ctx.beginPath();
        ctx.arc(cx, 200, frame * 15, 0, Math.PI * 2);
        ctx.fill();

        // Celebration text
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 50px Arial';
        if (frame >= 3) {
            ctx.fillText('🎉', cx - 80, 100);
            ctx.fillText('🎉', cx + 60, 80);
            ctx.fillText('🎊', cx, 50);
        }
    }

    // Scene 12: Walking away into beautiful sunset - bittersweet ending
    drawScene12Sunset(ctx, frame, cx, cy) {
        // Sunset sky gradient
        const sunsetGrad = ctx.createLinearGradient(0, 50, 0, 400);
        sunsetGrad.addColorStop(0, '#FF6B6B');
        sunsetGrad.addColorStop(0.3, '#FFA500');
        sunsetGrad.addColorStop(0.7, '#FFD93D');
        sunsetGrad.addColorStop(1, '#6BCB77');
        ctx.fillStyle = sunsetGrad;
        ctx.fillRect(30, 50, 540, 300);

        // Sun
        ctx.fillStyle = 'rgba(255, 200, 0, 0.8)';
        ctx.beginPath();
        ctx.arc(cx, 150 + frame * 5, 60, 0, Math.PI * 2);
        ctx.fill();

        // Ground
        ctx.fillStyle = '#6B5D4F';
        ctx.fillRect(30, 350, 540, 130);

        // Path into sunset
        ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(100, 400);
        ctx.lineTo(500, 280);
        ctx.stroke();

        // Friends walking away together (getting smaller/more distant)
        const scale = Math.max(0.5, 1 - (frame * 0.12));
        const walkX = 200 + frame * 35;
        const walkY = 330 - frame * 18;
        
        for (let i = 0; i < 3; i++) {
            ctx.save();
            ctx.globalAlpha = Math.max(0.3, 1 - frame * 0.1);
            this.drawConfidentWalk(ctx, walkX + i * 40, walkY, scale);
            ctx.restore();
        }

        // Floating hearts
        if (frame >= 2) {
            for (let i = 0; i < 3; i++) {
                ctx.globalAlpha = 0.6;
                this.drawHeart(ctx, cx + (Math.sin(frame + i) * 100), 100 + i * 40, 12);
                ctx.globalAlpha = 1;
            }
        }

        // Farewell text
        if (frame >= 5) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = 'italic 24px Georgia';
            ctx.textAlign = 'center';
            ctx.fillText('Till we meet again...', cx, 70);
        }
    }

    // ============ Helper Drawing Functions ============

    drawDetailedFigure(ctx, x, y, color = '#333', walking = false) {
        // Head with details
        ctx.fillStyle = '#E8C4A0';
        ctx.beginPath();
        ctx.arc(x, y - 45, 18, 0, Math.PI * 2);
        ctx.fill();

        // Eyes
        ctx.fillStyle = '#333';
        ctx.beginPath();
        ctx.arc(x - 6, y - 48, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 6, y - 48, 3, 0, Math.PI * 2);
        ctx.fill();

        // Smile
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y - 45, 7, 0, Math.PI);
        ctx.stroke();

        // Body
        ctx.fillStyle = color;
        ctx.fillRect(x - 15, y - 20, 30, 35);

        // Arms
        ctx.fillStyle = '#E8C4A0';
        ctx.fillRect(x - 25, y - 10, 10, 35);
        ctx.fillRect(x + 15, y - 10, 10, 35);

        // Legs
        ctx.fillStyle = '#333';
        ctx.fillRect(x - 10, y + 15, 8, 40);
        ctx.fillRect(x + 2, y + 15, 8, 40);

        // Shoes
        ctx.fillStyle = '#333';
        ctx.fillRect(x - 10, y + 54, 8, 6);
        ctx.fillRect(x + 2, y + 54, 8, 6);
    }

    drawStickFigure(ctx, x, y, color = '#333', scale = 1) {
        const s = scale || 1;
        ctx.fillStyle = color;
        
        // Head
        ctx.beginPath();
        ctx.arc(x, y - 40 * s, 15 * s, 0, Math.PI * 2);
        ctx.fill();

        // Body
        ctx.strokeStyle = color;
        ctx.lineWidth = 3 * s;
        ctx.beginPath();
        ctx.moveTo(x, y - 20 * s);
        ctx.lineTo(x, y + 20 * s);
        ctx.stroke();

        // Arms
        ctx.beginPath();
        ctx.moveTo(x - 20 * s, y);
        ctx.lineTo(x + 20 * s, y);
        ctx.stroke();

        // Legs
        ctx.beginPath();
        ctx.moveTo(x, y + 20 * s);
        ctx.lineTo(x - 15 * s, y + 50 * s);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y + 20 * s);
        ctx.lineTo(x + 15 * s, y + 50 * s);
        ctx.stroke();
    }

    drawSimpleFigure(ctx, x, y, color = '#333') {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y - 20, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(x - 8, y, 16, 20);
    }

    drawConfidentWalk(ctx, x, y, scale = 1) {
        const s = scale || 1;
        ctx.fillStyle = '#E8C4A0';
        ctx.beginPath();
        ctx.arc(x, y - 40 * s, 15 * s, 0, Math.PI * 2);
        ctx.fill();

        // Confident posture - head up
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 3 * s;
        ctx.beginPath();
        ctx.moveTo(x, y - 20 * s);
        ctx.lineTo(x, y + 20 * s);
        ctx.stroke();

        // Arms swinging
        ctx.beginPath();
        ctx.moveTo(x - 25 * s, y - 5 * s);
        ctx.lineTo(x + 25 * s, y + 5 * s);
        ctx.stroke();

        // Legs in confident stride
        ctx.fillStyle = '#333';
        ctx.fillRect(x - 8 * s, y + 20 * s, 6 * s, 30 * s);
        ctx.fillRect(x + 2 * s, y + 20 * s, 6 * s, 30 * s);
    }

    drawHappyStudent(ctx, x, y) {
        ctx.fillStyle = '#90EE90';
        ctx.beginPath();
        ctx.arc(x, y - 40, 15, 0, Math.PI * 2);
        ctx.fill();

        // Happy face
        ctx.fillStyle = '#333';
        ctx.beginPath();
        ctx.arc(x - 5, y - 43, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 5, y - 43, 3, 0, Math.PI * 2);
        ctx.fill();

        // Big smile
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y - 38, 8, 0, Math.PI);
        ctx.stroke();
    }

    drawStressedStudent(ctx, x, y, stress) {
        ctx.fillStyle = stress > 3 ? '#FF6B6B' : '#E8C4A0';
        ctx.beginPath();
        ctx.arc(x, y - 40, 15, 0, Math.PI * 2);
        ctx.fill();

        if (stress > 2) {
            ctx.fillStyle = '#FF0000';
            ctx.font = 'bold 24px Arial';
            ctx.fillText('!', x + 20, y - 30);
        }
    }

    drawCircleHead(ctx, x, y, size = 20) {
        ctx.fillStyle = '#E8C4A0';
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    drawCoffeeCupWithSteam(ctx, x, y, frame) {
        // Cup
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(x - 15, y, 30, 35);
        ctx.fillStyle = '#D2B48C';
        ctx.fillRect(x - 10, y + 5, 20, 25);

        // Handle
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x + 20, y + 12, 8, -Math.PI/2, Math.PI/2);
        ctx.stroke();

        // Steam
        ctx.strokeStyle = 'rgba(200, 200, 200, 0.6)';
        ctx.lineWidth = 2;
        for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.arc(x - 5 + i * 8, y - 10 - Math.sin(frame + i) * 5, 4, 0, Math.PI * 2);
            ctx.stroke();
        }
    }

    drawCoffeeCup(ctx, x, y) {
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(x - 15, y, 30, 35);
        ctx.fillStyle = '#D2B48C';
        ctx.fillRect(x - 10, y + 5, 20, 25);

        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x + 20, y + 12, 8, -Math.PI/2, Math.PI/2);
        ctx.stroke();
    }

    drawHeart(ctx, x, y, size = 10) {
        ctx.fillStyle = '#FF69B4';
        ctx.beginPath();
        ctx.moveTo(x, y + size/2);
        ctx.bezierCurveTo(x - size, y - size, x - size*1.5, y - size*1.5, x, y - size);
        ctx.bezierCurveTo(x + size*1.5, y - size*1.5, x + size, y - size, x, y + size/2);
        ctx.fill();
    }

    drawCamera(ctx, x, y) {
        ctx.fillStyle = '#333';
        ctx.fillRect(x - 30, y - 18, 60, 35);
        ctx.fillStyle = '#666';
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#999';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Flash
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(x - 20, y - 15, 8, 8);
    }

    drawGraduationCap(ctx, x, y) {
        ctx.fillStyle = '#000';
        ctx.fillRect(x - 20, y, 40, 8);
        ctx.beginPath();
        ctx.moveTo(x - 25, y);
        ctx.lineTo(x, y - 20);
        ctx.lineTo(x + 25, y);
        ctx.fill();
    }

    drawGraduationCapFancy(ctx, x, y, rotation = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation * Math.PI / 180);
        
        ctx.fillStyle = '#000';
        ctx.fillRect(-20, 0, 40, 8);
        
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(-25, 0);
        ctx.lineTo(0, -22);
        ctx.lineTo(25, 0);
        ctx.fill();
        
        // Tassel
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, -22);
        ctx.lineTo(0, 8);
        ctx.stroke();
        
        ctx.restore();
    }

    drawTree(ctx, x, y) {
        ctx.fillStyle = '#228B22';
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - 45, y + 70);
        ctx.lineTo(x + 45, y + 70);
        ctx.fill();

        ctx.fillStyle = '#8B4513';
        ctx.fillRect(x - 6, y + 70, 12, 45);
    }

    drawRunningFigure(ctx, x, y, color) {
        ctx.fillStyle = '#E8C4A0';
        ctx.beginPath();
        ctx.arc(x, y - 40, 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x, y - 28);
        ctx.lineTo(x, y + 15);
        ctx.stroke();

        // Running pose
        ctx.beginPath();
        ctx.moveTo(x - 18, y - 5);
        ctx.lineTo(x + 18, y + 5);
        ctx.stroke();
    }

    drawUmbrella(ctx, x, y) {
        ctx.fillStyle = '#FF1493';
        ctx.beginPath();
        ctx.arc(x, y, 35, 0, Math.PI);
        ctx.fill();

        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + 50);
        ctx.stroke();

        // Handle
        ctx.beginPath();
        ctx.arc(x, y + 50, 8, 0, Math.PI);
        ctx.stroke();
    }

    drawCheckMark(ctx, x, y) {
        ctx.strokeStyle = '#27AE60';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(x - 20, y);
        ctx.lineTo(x - 5, y + 12);
        ctx.lineTo(x + 20, y - 15);
        ctx.stroke();
    }

    drawGraduate(ctx, x, y, frame) {
        // Gown
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.moveTo(x - 18, y);
        ctx.lineTo(x + 18, y);
        ctx.lineTo(x + 20, y + 45);
        ctx.lineTo(x - 20, y + 45);
        ctx.fill();

        // Head
        ctx.fillStyle = '#E8C4A0';
        ctx.beginPath();
        ctx.arc(x, y - 15, 12, 0, Math.PI * 2);
        ctx.fill();

        // Graduation cap
        this.drawGraduationCapFancy(ctx, x, y - 30, frame * 5);
    }

    drawCloud(ctx, x, y) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(x - 30, y, 25, 0, Math.PI * 2);
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.arc(x + 30, y, 25, 0, Math.PI * 2);
        ctx.fill();
    }

    drawDiploma(ctx, x, y) {
        ctx.fillStyle = '#F4E4C1';
        ctx.beginPath();
        ctx.moveTo(x - 45, y);
        ctx.lineTo(x + 45, y);
        ctx.lineTo(x + 40, y + 70);
        ctx.lineTo(x - 40, y + 70);
        ctx.fill();

        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Seal
        ctx.fillStyle = '#D4AF37';
        ctx.beginPath();
        ctx.arc(x - 15, y + 35, 10, 0, Math.PI * 2);
        ctx.fill();
    }

    drawFoodItems(ctx, cx) {
        // Pizza
        ctx.fillStyle = '#FF8C00';
        ctx.beginPath();
        ctx.moveTo(cx - 40, 300);
        ctx.lineTo(cx - 20, 290);
        ctx.lineTo(cx - 15, 310);
        ctx.fill();

        // Drinks
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(cx + 20, 295, 12, 25);
        ctx.fillStyle = '#FF69B4';
        ctx.fillRect(cx + 40, 295, 12, 25);
    }

    drawFestivalConfetti(ctx, frame) {
        for (let i = 0; i < 10; i++) {
            const x = 100 + Math.random() * 400;
            const y = 100 + frame * 15 + Math.random() * 80;
            const colors = ['#FFD700', '#FF69B4', '#00CED1', '#FF6B6B', '#90EE90'];
            
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            ctx.fillRect(x, y, 6, 6);
        }
    }

    drawCeremonyConfetti(ctx, frame) {
        for (let i = 0; i < 15; i++) {
            const x = 100 + Math.random() * 400;
            const y = 80 + frame * 20 + Math.random() * 100;
            const colors = ['#FFD700', '#FF6B6B', '#4169E1', '#90EE90'];
            
            ctx.fillStyle = colors[i % colors.length];
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

// Initialize when page loads
console.log('FlipbookPrintRenderer script loaded successfully');
window.addEventListener('load', () => {
    console.log('Initializing FlipbookPrintRenderer...');
    const renderer = new FlipbookPrintRenderer();
    console.log('FlipbookPrintRenderer initialized. Found', renderer.canvases.length, 'canvases');
});
