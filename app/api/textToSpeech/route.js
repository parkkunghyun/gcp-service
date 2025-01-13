import { NextResponse } from 'next/server';

const apiKey = process.env.NEXT_PUBLIC_GCP_API_KEY;
const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

export async function POST(request) {
    const { inputText, selectedLanguage } = await request.json(); // request에서 JSON 파싱

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                input: {
                    text: inputText, // 텍스트 입력
                },
                voice: {
                    languageCode: selectedLanguage, // 선택된 언어
                },
                audioConfig: {
                    audioEncoding: 'MP3', // 오디오 인코딩 방식 (MP3 등)
                    speakingRate: 1.0, // 발음 속도 (기본값 1.0)
                },
            }),
        });

        // 응답 본문이 비어 있지 않은지 확인
        if (!response.ok) {
            throw new Error(`API 호출 실패: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        // 성공적으로 응답이 오면 오디오 콘텐츠를 반환
        return NextResponse.json({ audioContent: data.audioContent });
    } catch (e) {
        console.error('TTS API Error:', e.message);
        return NextResponse.json({ error: '음성 합성 오류가 발생했습니다.' }, { status: 500 });
    }
}
